<template>
  <div class="home bg-light container-fluid">
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
  }
};
</script>
