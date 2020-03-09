<template>
  <div class="todo p-3 mb-3">
    <p v-if="unfinishedTodos.length == 0">0 to do's</p>
    <p>{{ unfinishedTodos.length }} to do</p>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todoData="todo"
    ></todo-item>
    <!-- <p v-for="todo in todos" :key="todo.id">{{ todo.description }}</p> -->
    <button class="mr-2 btn btn-outline-light btn-sm">
      New To Do
    </button>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "Todo",
  data() {
    return {
      newTodo: {
        description: "",
        completed: false
      }
    };
  },
  components: {
    TodoItem
  },
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
  },
  methods: {
    addTodo() {
      let todo = { ...this.newTodo };
      this.$store.dispatch("addTodo", todo);
      this.newTodo.description = "";
    }
  }
};
</script>

<style scoped>
.todo {
  background-color: rgba(20, 21, 22, 0.801);
}
</style>
