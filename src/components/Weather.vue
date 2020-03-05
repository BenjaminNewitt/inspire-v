<template>
  <div class="weather">
    <h4>{{ weather.main.temp }}°</h4>
    <p>{{ weather.name }}</p>
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
