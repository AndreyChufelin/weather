<template>
  <header class="header">
    <div class="header__container container">
      <h2 class="header__title title">City, Country</h2>
      <header-search />
      <header-language />
    </div>
    <div class="header__subtitle container">monday 29 may</div>
  </header>
</template>
<script>
import HeaderLanguage from "./HeaderLanguage.vue";
import HeaderSearch from "./HeaderSearch.vue";
export default {
  components: { HeaderLanguage, HeaderSearch },
  setup() {},
};
</script>
