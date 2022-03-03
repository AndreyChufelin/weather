<template>
  <swiper
    class="hours__list"
    slides-per-view="auto"
    :space-between="11"
    :observer="true"
  >
    <swiper-slide style="width: 200px" v-for="hour in hours" :key="hour.dt">
      <weather-card :weather="hour" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import WeatherCard from "./WeatherCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    WeatherCard,
  },
  props: {
    hours: {
      type: Array,
      required: true,
    },
  },
  setup() {},
};
</script>
