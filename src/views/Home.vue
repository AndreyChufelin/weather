<template>
  <div class="home" style="position: relative">
    <transition-group name="fade">
      <div v-if="status === statuses.ready" key="weather">
        <weather-day v-if="currentDay" class="today" :weather="currentDay" />
        <weather-list v-if="hours" :hours="hours" />
        <weaher-next-day v-for="day in nextDays" :key="day.dt" :weather="day" />
      </div>
      <app-spinner v-else-if="status === statuses.loading" key="loading" />
      <p v-else-if="status === 'city'" key="error" style="text-align: center">
        Please select a city
      </p>
    </transition-group>
  </div>
</template>

<script>
import AppSpinner from "../components/AppSpinner.vue";
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import WeatherDay from "../components/WeatherDay.vue";
import WeatherList from "../components/WeatherList.vue";
import WeaherNextDay from "../components/WeaherNextDay.vue";
import { getWeatherApi } from "../api/weather";
import { statuses } from "../common/types";

export default {
  components: { WeatherDay, WeatherList, WeaherNextDay, AppSpinner },
  name: "Home",
  setup() {
    const store = useStore();
    const city = computed(() => store.state.location.city);
    const language = computed(() => store.state.settings.language);
    const status = ref(statuses.loading);

    const weather = ref(null);

    const currentDay = computed(() => weather.value?.daily[0]);
    const hours = computed(() => weather.value?.hourly);
    const nextDays = computed(() => weather.value?.daily.slice(1));

    function getWeather() {
      status.value = statuses.loading;
      if (city.value) {
        return getWeatherApi(
          {
            latitude: city.value.latitude,
            longitude: city.value.longitude,
          },
          language.value
        )
          .then((res) => {
            weather.value = res;
            setTimeout(() => {
              status.value = statuses.ready;
            }, 3000);
          })
          .catch((error) => {
            store.commit("addError", error);
          });
      }
      status.value = "city";
      return new Promise(() => {});
    }

    onMounted(() => {
      getWeather().then(() => {
        if (currentDay.value) {
          const favicon = document.getElementById("favicon");
          favicon.href = require(`../assets/images/${currentDay.value.weather[0].icon.slice(
            0,
            -1
          )}.png`);
        }
      });
    });

    watch(city, () => {
      getWeather();
    });
    watch(language, () => {
      getWeather();
    });

    return { weather, currentDay, hours, nextDays, city, status, statuses };
  },
};
</script>
