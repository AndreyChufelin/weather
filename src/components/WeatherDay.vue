<template>
  <div class="day">
    <div class="day__container">
      <div class="day__main">
        <div class="day__icon">
          <weather-icon
            class="card__icon"
            :id="weather.weather[0].icon"
            :weather="weather.weather[0].description"
          />
        </div>
        <div class="day__weather">
          {{ Math.floor(weather.temp.day) }}°
          <div class="day__weather-description">
            {{ weather.weather[0].description }}
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="day__info">
        <div class="day__info-item">
          {{ Math.floor(weather.temp.max) }}°
          <div>High</div>
        </div>
        <div class="day__info-item">
          {{ weather.wind_speed }}mph
          <div>Wind</div>
        </div>
        <div class="day__info-item">
          {{ sunrise }}
          <div>Sunrise</div>
        </div>
        <div class="day__info-item">
          {{ Math.floor(weather.temp.min) }}°
          <div>Low</div>
        </div>
        <div class="day__info-item">
          {{ weather.humidity }}%
          <div>Humidity</div>
        </div>
        <div class="day__info-item">
          {{ sunset }}
          <div>Sunset</div>
        </div>
      </div>
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
    const sunset = computed(() => getTime(props.weather.sunset));
    const sunrise = computed(() => getTime(props.weather.sunrise));

    return {
      sunset,
      sunrise,
    };
  },
};
</script>
