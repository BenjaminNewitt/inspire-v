<template>
  <div class="todo p-3 mb-3">
    <p v-if="unfinishedTodos.length == 0">0 to do's</p>
    <p>{{ unfinishedTodos.length }} to do</p>
    <p v-for="todo in todos" :key="todo.id">{{ todo.description }}</p>
    <p>New To Do</p>
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
    },
    unfinishedTodos() {
      return this.$store.state.todos.filter(t => t.completed == false);
    }
  }
};
</script>

<style scoped>
.todo {
  background-color: rgba(20, 21, 22, 0.801);
}
</style>
