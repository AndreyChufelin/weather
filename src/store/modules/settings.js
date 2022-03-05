import { languages } from "../../common/types";

export default {
  state: {
    language: JSON.parse(localStorage.getItem("language")) || languages.eng,
  },
  mutations: {
    setLanguage(state, payload) {
      state.language = payload;
      localStorage.setItem("language", JSON.stringify(payload));
    },
  },
  actions: {},
  getters: {},
};
