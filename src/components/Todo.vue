<template>
  <div class="todo p-3 mb-3">
    <p v-if="unfinishedTodos.length == 0">0 to do's</p>
    <p>{{ unfinishedTodos.length }} to do</p>
    <div class="row todo-items-row overflow-auto">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todoData="todo"
        class="col-12"
      ></todo-item>
    </div>
    <button
      v-if="this.newTodoForm == false"
      class="mr-2 btn btn-outline-light btn-sm"
      @click="newTodoToggle"
    >
      New To Do
    </button>
    <form v-if="this.newTodoForm == true" @submit.prevent="addTodo">
      <div class="form-row">
        <div class="form-group col-10">
          <input
            v-model="newTodo.description"
            type="text"
            class="form-control form-control-sm d-inline"
            placeholder="todo item"
            maxlength="30"
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-outline-light btn-sm d-inline col-2 border-0"
        >
          +
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "Todo",
  data() {
    return {
      newTodo: {
        description: ""
      },
      newTodoForm: false
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
    newTodoToggle() {
      if (this.newTodoForm == false) {
        this.newTodoForm = true;
      } else {
        this.newTodoForm = false;
      }
    },
    addTodo() {
      let todo = { ...this.newTodo };
      this.$store.dispatch("addTodo", todo);
      // this.newTodo.description = "";
    }
  }
};
</script>

<style scoped>
.todo {
  background-color: rgba(20, 21, 22, 0.801);
}

.todo-items-row {
  max-height: 25vh;
  width: auto;
}

.todo-items-row::-webkit-scrollbar {
  display: none;
}
</style>
