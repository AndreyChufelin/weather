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
          <div>{{ t("high") }}</div>
        </div>
        <div class="day__info-item">
          {{ weather.wind_speed }}{{ t("ms") }}
          <div>{{ t("wind") }}</div>
        </div>
        <div class="day__info-item">
          {{ sunrise }}
          <div>{{ t("sunrise") }}</div>
        </div>
        <div class="day__info-item">
          {{ Math.floor(weather.temp.min) }}°
          <div>{{ t("low") }}</div>
        </div>
        <div class="day__info-item">
          {{ weather.humidity }}%
          <div>{{ t("humidity") }}</div>
        </div>
        <div class="day__info-item">
          {{ sunset }}
          <div>{{ t("sunset") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WeatherIcon from "./WeatherIcon.vue";
import { getTime } from "../common/date.js";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  components: { WeatherIcon },
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const sunset = computed(() => getTime(props.weather.sunset));
    const sunrise = computed(() => getTime(props.weather.sunrise));

    return {
      sunset,
      sunrise,
      t,
    };
  },
};
</script>
