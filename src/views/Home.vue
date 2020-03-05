<template>
  <div
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage.url + ')' }"
    class="home container-fluid bg-image"
  >
    <div class="row d-flex flex-row-reverse">
      <div class="col-4">WEATHER</div>
    </div>
    <div class="row">
      <div class="col-12">CLOCK</div>
    </div>
    <div class="row">
      <div class="col-4">IMAGE NAME</div>
      <div class="col-4">QUOTE</div>
      <div class="col-4">TODO</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    this.$store.dispatch("getBackgroundImage");
  },
  computed: {
    backgroundImage() {
      return this.$store.state.backgroundImage;
    }
  }
};
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.home {
  height: 100vh;
}
</style>
