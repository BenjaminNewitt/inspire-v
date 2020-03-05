<template>
  <div
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage.url + ')' }"
    class="home container-fluid bg-image"
  >
    <div class="row d-flex flex-row-reverse">
      <div class="col-1"><weather></weather></div>
    </div>
    <div class="row">
      <div class="col-12">CLOCK</div>
    </div>
    <div class="row fixed-bottom">
      <div class="col-3">
        <p>{{ backgroundImage.site }}</p>
      </div>
      <div class="col-6"><quote></quote></div>
      <div class="col-3"><todo></todo></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import Weather from "@/components/Weather.vue";
import Quote from "@/components/Quote.vue";

export default {
  name: "Home",
  components: {
    Quote,
    Weather,
    Todo
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
  height: 100%;
}
.home {
  height: 100vh;
}
</style>
