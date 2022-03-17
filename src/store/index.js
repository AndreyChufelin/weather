import { createStore } from "vuex";
import settings from "./modules/settings";
import location from "./modules/location";
import weather from "./modules/weather";

let errorId = 1;

export default createStore({
  state: { errors: [] },
  mutations: {
    addError(state, payload) {
      state.errors.push({ ...payload, id: errorId++ });
    },
    deleteError(state, id) {
      let index;
      state.errors.forEach((error, i) => {
        if (error.id === id) {
          index = i;
        }
      });

      state.errors.splice(index, 1);
    },
  },
  actions: {},
  modules: { settings, location, weather },
});
