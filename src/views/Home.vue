<template>
  <div
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage.url + ')' }"
    class="home container-fluid bg-image"
  >
    <div class="row d-flex flex-row-reverse">
      <div class="col-2"><weather></weather></div>
    </div>
    <div class="row">
      <div
        class="col-5 col-md-3 m-auto justify-content-center text-center clock-col rounded"
      >
        <clock></clock>
      </div>
    </div>
    <div class="row fixed-bottom">
      <div class="col-12">
        <div class="row d-flex flex-row-reverse">
          <div class="col-3">
            <todo v-if="todosOpened == true"></todo>
          </div>
        </div>
      </div>
      <div class="col-3">
        <p class="ml-5">{{ backgroundImage.site }}</p>
      </div>
      <div class="col-6"><quote></quote></div>
      <div class="col-3 mt-2 text-right">
        <button class="shadow-sm mr-2 btn btn-dark btn-sm" @click="todoToggle">
          Todo's
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import Weather from "@/components/Weather.vue";
import Quote from "@/components/Quote.vue";
import Clock from "@/components/Clock.vue";

export default {
  name: "Home",
  components: {
    Quote,
    Weather,
    Todo,
    Clock
  },
  mounted() {
    this.$store.dispatch("getBackgroundImage");
  },
  computed: {
    backgroundImage() {
      return this.$store.state.backgroundImage;
    }
  },
  data() {
    return {
      todosOpened: false
    };
  },
  methods: {
    todoToggle() {
      if (this.todosOpened == false) {
        this.todosOpened = true;
      } else {
        this.todosOpened = false;
      }
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

.container-fluid {
  height: 100vh;
}

.clock-col {
  background-color: rgba(20, 21, 22, 0.801);
}
</style>
