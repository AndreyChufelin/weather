<template>
  <the-header />
  <main class="container">
    <router-view />
  </main>
  <the-footer />
</template>
<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  components: { TheHeader, TheFooter },
  setup() {
    const store = useStore();
    const city = computed(() => store.state.location.city);
    const language = computed(() => store.state.settings.language);

    if (!city.value) {
      navigator.geolocation.getCurrentPosition((pos) => {
        store.dispatch("getCityByCoords", {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }

    watch(language, () => {
      store.dispatch("getCityById");
    });
  },
};
</script>
