<template>
  <ul v-if="cities.length > 0" class="search-list">
    <li
      v-for="(city, index) in cities"
      :key="city.id"
      class="search-list__item"
      :class="index === selectedCity ? 'search-list__item_selected' : ''"
      @click.stop="selectCity(city)"
    >
      {{ city.name }}, {{ city.country }}
    </li>
  </ul>
  <p class="search-list" style="padding: 15px" v-else>{{ t("no_results") }}</p>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  props: {
    cities: Array,
  },
  emits: ["selected"],
  setup(props, { emit }) {
    const { t } = useI18n();
    const store = useStore();
    const selectedCity = ref(0);

    function selectCity(city) {
      emit("selected");
      store.commit("setCity", city);
    }

    onMounted(() => {
      document.onkeydown = function (event) {
        switch (event.keyCode) {
          case 38:
            if (selectedCity.value > 0) {
              selectedCity.value--;
            }
            break;
          case 40:
            if (selectedCity.value < props.cities.length - 1) {
              selectedCity.value++;
            }
            break;
          case 13:
            store.commit("setCity", props.cities[selectedCity.value]);
            emit("selected");
            break;
        }
      };
    });

    return { selectedCity, selectCity, t };
  },
};
</script>
