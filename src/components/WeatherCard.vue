<template>
  <div class="card swiper-slide">
    <div class="card__title">{{ time }}</div>
    <weather-icon
      class="card__icon"
      :id="weather.weather[0].icon"
      :weather="weather.weather[0].description"
    />
    <div class="card__info">
      {{ weather.temp }}°, {{ weather.weather[0].description }}
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon.vue";
import { getTime } from "../common/date.js";
import { computed } from "vue";

export default {
  components: { WeatherIcon },
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const time = computed(() => getTime(props.weather.dt));

    return {
      time,
    };
  },
};
</script>

<style lang="scss" scoped></style>
