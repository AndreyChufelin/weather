<template>
  <div class="header__language language">
    <button
      @click="setLanguage('ru')"
      class="link"
      :class="language === 'ru' ? 'link_selected' : ''"
      href="#"
    >
      RU
    </button>
    |
    <button
      @click="setLanguage('eng')"
      class="link"
      :class="language === 'en' ? 'link_selected' : ''"
      href="#"
    >
      ENG
    </button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { languages } from "../common/types";

export default {
  setup() {
    const store = useStore();
    const language = computed(() => store.state.settings.language);

    function setLanguage(language) {
      store.commit("setLanguage", languages[language]);
    }

    return {
      language,
      setLanguage,
    };
  },
};
</script>
