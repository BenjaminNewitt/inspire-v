import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let baseUrl = "//bcw-sandbox.herokuapp.com/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 8000
});

export default new Vuex.Store({
  state: {
    backgroundImage: {},
    quote: {},
    weather: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.name] = payload.data;
    }
  },
  actions: {
    async getBackgroundImage({ commit, dispatch }) {
      try {
        let res = await api.get("images");
        commit("setResource", { name: "backgroundImage", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },

    async getWeather({ commit, dispatch }) {
      try {
        let res = await api.get("weather");
        commit("setResource", { name: "weather", data: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
