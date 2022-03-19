<template>
  <swiper
    class="hours__list"
    slides-per-view="auto"
    :space-between="11"
    :observer="true"
    :resizeObserver="true"
    :observeSlideChildren="true"
    @sliderFirstMove="avtiveSlideKey = null"
  >
    <swiper-slide
      class="card-slide"
      :style="`width: 200px; height: auto !important`"
      v-for="(hour, index) in hours"
      :ref="
        (el) => {
          slides[index] = el;
        }
      "
      :key="hour.dt"
    >
      <weather-card
        @showMore="showMore($event, index)"
        :weather="hour"
        :show="avtiveSlideKey === index"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import WeatherCard from "./WeatherCard.vue";
import { ref } from "vue";

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
  setup() {
    const slides = ref([]);
    const avtiveSlideKey = ref(null);

    function showMore(event, index) {
      if (avtiveSlideKey.value) {
        slides.value[avtiveSlideKey.value].$el.style.width = "200px";
        // avtiveSlide.value.style.width = "200px";
      }
      if (event) {
        setTimeout(() => {
          slides.value[index].$el.style.width = "400px";
        }, 100);
      } else {
        slides.value[index].$el.style.width = "200px";
      }
      avtiveSlideKey.value = index;
      // avtiveSlide.value = slides.value[index].$el;
    }

    return { slides, avtiveSlideKey, showMore };
  },
};
</script>
