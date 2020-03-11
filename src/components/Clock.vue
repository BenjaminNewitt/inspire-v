<template>
  <div class="clock">
    <!-- <h1 class="text-center">{{ moment(date).format("LT") }}</h1> -->
    <digital-clock :twelveHour="true" style="font-size: 5rem;" />
  </div>
</template>

<script>
// import moment from "moment";
import DigitalClock from "vue-digital-clock";
export default {
  name: "Clock",
  components: {
    DigitalClock
  }
  // methods: {
  // moment: function() {
  //   return moment();
  // }
  // }
};
</script>
<style scoped></style>
