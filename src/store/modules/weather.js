export default {
  state: {
    currentWeather: {},
  },
  mutations: {
    setCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
  },
  actions: {},
  getters: {},
};
