<template>
  <div class="todo">
    <h2>TODOS</h2>
  </div>
</template>

<script>
export default {
  name: "Todo",
  mounted() {
    this.$store.dispatch("getTodos");
  }
};
</script>

<style scoped>
.todo {
  background-color: rgba(41, 43, 44, 0.75);
}
</style>
