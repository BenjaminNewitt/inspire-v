<template>
  <div class="weather">
    <div class="row justify-content-end mt-2">
      <div class="col-2 mr-2">
        <img
          v-bind:src="
            'http://openweathermap.org/img/wn/' +
              weather.weather[0].icon +
              '.png'
          "
          alt=""
          class="weather-icon"
        />
      </div>
      <div class="col-4">
        <h4>{{ weather.fahrenheit }}°</h4>
        <p>{{ weather.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  mounted() {
    this.$store.dispatch("getWeather");
  },
  computed: {
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>

<style scoped></style>
