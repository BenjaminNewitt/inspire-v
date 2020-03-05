<template>
  <div class="weather">
    {{ weather }}
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
