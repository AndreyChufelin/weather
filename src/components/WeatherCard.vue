<template>
  <div ref="card" class="card" @click="showMore">
    <div class="card__main">
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
    <transition name="fade-card">
      <div v-if="isShowingMore" class="card__body">
        <div class="card__addition-info">
          <div class="card__addition-info-item">
            {{ Math.floor(weather.feels_like) }}°
            <div>Feels Like</div>
          </div>
          <div class="card__addition-info-item">
            {{ weather.humidity }}%
            <div>Humidity</div>
          </div>
          <div class="card__addition-info-item">
            {{ weather.pressure }}
            <div>Pressure, mm Hg</div>
          </div>
          <div class="card__addition-info-item">
            {{ weather.wind_speed }}<span style="font-size: 0.5em">m/s</span>
            <div>Wind</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon.vue";
import { getTime } from "../common/date.js";
import { computed, ref, toRefs, watch } from "vue";

export default {
  components: { WeatherIcon },
  props: {
    weather: {
      type: Object,
      required: true,
    },
    show: Boolean,
  },
  emits: ["showMore"],
  setup(props, { emit }) {
    const show = toRefs(props).show;
    const card = ref(null);
    const time = computed(() => getTime(props.weather.dt));
    const isShowingMore = ref(false);

    function showMore() {
      isShowingMore.value = !isShowingMore.value;
      emit("showMore", isShowingMore.value);
    }

    watch(show, (value) => {
      isShowingMore.value = value;
    });

    return {
      time,
      card,
      isShowingMore,
      showMore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
