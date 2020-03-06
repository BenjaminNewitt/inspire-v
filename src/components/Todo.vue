<template>
  <div class="todo">
    <p>{{ todos.length }} to do</p>
    <p v-for="todo in todos" :key="todo.id">{{ todo.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  mounted() {
    this.$store.dispatch("getTodos");
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style scoped>
.todo {
  background-color: rgba(20, 21, 22, 0.801);
}
</style>
