import { getCityByCoordsApi, getCityByIdApi } from "../../api/location";

export default {
  state: {
    city: JSON.parse(localStorage.getItem("city")) || null,
  },
  mutations: {
    setCity(state, payload) {
      state.city = payload;
      localStorage.setItem("city", JSON.stringify(payload));
    },
  },
  actions: {
    getCityByCoords({ commit }, coords) {
      return getCityByCoordsApi(coords).then((city) => {
        commit("setCity", city);
        return city;
      });
    },
    getCityById({ commit, state }) {
      return getCityByIdApi(state.city.id).then((city) => {
        commit("setCity", city);
        return city;
      });
    },
  },
  getters: {},
};
