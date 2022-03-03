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
export default {
  components: { TheHeader, TheFooter },
  setup() {},
};
</script>
