<template>
  <header class="header">
    <div class="header__container container">
      <h2 class="header__title title">
        <template v-if="city">{{ city.name }}, {{ city.country }}</template>
        <template v-else>DoggoWeather</template>
      </h2>
      <header-search />
      <header-language />
    </div>
    <div class="header__subtitle container">monday 29 may</div>
  </header>
</template>
<script>
import HeaderLanguage from "./HeaderLanguage.vue";
import HeaderSearch from "./HeaderSearch.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { HeaderLanguage, HeaderSearch },
  setup() {
    const store = useStore();
    const city = computed(() => store.state.location.city);

    return { city };
  },
};
</script>
