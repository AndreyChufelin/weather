import { languages } from "../../common/types";

export default {
  state: {
    language: localStorage.getItem("language") || languages.eng,
  },
  mutations: {
    setLanguage(state, payload) {
      state.language = payload;
      localStorage.setItem("language", payload);
    },
  },
  actions: {},
  getters: {},
};
