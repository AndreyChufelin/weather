<template>
  <ul class="errors">
    <li
      v-for="error in errors"
      :key="error.id"
      class="errors__item"
      @click="deleteMessage(error.id)"
    >
      {{ error.message || "Unknown error. Try again" }}
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = new useStore();
    const errors = store.state.errors;
    function deleteMessage(id) {
      store.commit("deleteError", id);
    }

    return { errors, deleteMessage };
  },
};
</script>

<style lang="scss" scoped></style>
