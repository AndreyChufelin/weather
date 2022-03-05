import { createStore } from "vuex";
import settings from "./modules/settings";
import location from "./modules/location";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { settings, location },
});
