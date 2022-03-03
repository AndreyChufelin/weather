<template>
  <div class="next-day">
    <div class="next-day__title">{{ date }}</div>
    <weather-day :weather="weather" />
  </div>
</template>
<script>
import { getDate } from "../common/date";
import WeatherDay from "./WeatherDay.vue";
import { computed } from "vue";

export default {
  components: { WeatherDay },
  props: {
    weather: Object,
  },
  setup(props) {
    const date = computed(() => getDate(props.weather.dt2));
    return { date };
  },
};
</script>
