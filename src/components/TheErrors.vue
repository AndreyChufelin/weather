<template>
  <ul class="errors">
    <li
      v-for="error in errors"
      :key="error.id"
      class="errors__item"
      @click="deleteMessage(error.id)"
    >
      {{ error.message || t("unknown_error") }}
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    const store = new useStore();
    const errors = store.state.errors;
    function deleteMessage(id) {
      store.commit("deleteError", id);
    }

    return { errors, deleteMessage, t };
  },
};
</script>

<style lang="scss" scoped></style>
