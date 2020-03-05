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
    },
    setWeather(state, payload) {
      payload.data.main.temp = Math.floor(
        ((payload.data.main.temp - 273.15) * 9) / 5 + 32
      );
      state.weather = payload.data;
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
        commit("setWeather", { data: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
