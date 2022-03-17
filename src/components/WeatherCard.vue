<template>
  <div
    class="card swiper-slide"
    :class="time === currentTime ? 'card_selected' : ''"
    @click="setCurrentWeather"
  >
    <div class="card__title">{{ time }}</div>
    <weather-icon
      class="card__icon"
      :id="weather.weather[0].icon"
      :weather="weather.weather[0].description"
    />
    <div class="card__info">
      {{ Math.floor(weather.temp) }}°, {{ weather.weather[0].description }}
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon.vue";
import { getTime } from "../common/date.js";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { WeatherIcon },
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const time = computed(() => getTime(props.weather.dt));
    const currentTime = computed(() =>
      getTime(store.state.weather.currentWeather.dt)
    );

    function setCurrentWeather() {
      const weatherData = {
        ...props.weather,
        temp: {
          min: props.weather.temp,
          max: props.weather.temp,
          day: props.weather.temp,
        },
        sunset: store.state.weather.currentWeather.sunset,
        sunrise: store.state.weather.currentWeather.sunrise,
      };
      store.commit("setCurrentWeather", weatherData);
    }

    return {
      time,
      setCurrentWeather,
      currentTime,
    };
  },
};
</script>

<style lang="scss" scoped></style>
