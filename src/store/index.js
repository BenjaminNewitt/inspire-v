import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let baseUrl = "//bcw-sandbox.herokuapp.com/";

let api = Axios.create({
  baseURL: baseUrl + "api/"
  // timeout: 8000
});

export default new Vuex.Store({
  state: {
    backgroundImage: {},
    quote: {},
    weather: {},
    todos: []
  },
  mutations: {
    setResource(state, payload) {
      state[payload.name] = payload.data;
    },
    setWeather(state, payload) {
      payload.data.fahrenheit = Math.floor(
        ((payload.data.main.temp - 273.15) * 9) / 5 + 32
      );
      state.weather = payload.data;
    },
    addTodo(state, payload) {
      state.todos.push(payload.data);
    }
  },
  actions: {
    //#region
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
    },

    async getQuote({ commit, dispatch }) {
      try {
        let res = await api.get("quotes");
        commit("setResource", { name: "quote", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },

    async getTodos({ commit, dispatch }) {
      try {
        let res = await api.get("benjamin/todos");
        commit("setResource", { name: "todos", data: res.data.data });
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion

    async addTodo({ commit, dispatch }, payload) {
      try {
        let res = await api.post("benjamin/todos", payload);
        commit("addTodo", { data: res.data.data });
      } catch (error) {
        console.error(error);
      }
    },

    async editTodo({ commit, dispatch }, payload) {
      try {
        let res = await api.put("benjamin/todos/" + payload._id, payload);
        dispatch("getTodos");
      } catch (error) {
        console.error(error);
      }
    },

    async deleteTodo({ commit, dispatch }, todoId) {
      try {
        let res = await api.delete("benjamin/todos/" + todoId);
        dispatch("getTodos");
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
