<template>
  <div class="todo p-3 mb-3">
    <p v-if="unfinishedTodos.length == 0">0 to do's</p>
    <p>{{ unfinishedTodos.length }} to do</p>
    <div class="row todo-items-row overflow-auto mb-3">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todoData="todo"
        class="col-12"
      ></todo-item>
    </div>
    <button
      v-if="this.newTodoForm == false"
      class=" mb-1 btn btn-outline-light"
      @click="newTodoToggle"
    >
      New To Do
    </button>
    <div class="row d-flex flex-row">
      <div class="col-10">
        <form v-if="this.newTodoForm == true" @submit.prevent="addTodo">
          <div class="row justify-content-start align-items-center">
            <div class="col-8 p-1">
              <input
                v-model="newTodo.description"
                type="text"
                class="form-control  align-self-center"
                placeholder="todo item"
                maxlength="30"
                required
              />
            </div>
            <div class="col-1 p-1">
              <button type="submit" class="btn btn-outline-light">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-1">
        <i
          v-if="this.newTodoForm == true"
          class="fas fa-times text-danger close-form"
          @click="newTodoToggle"
        ></i>
      </div>
    </div>
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
      this.newTodo.description = "";
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

/* .todo-items-row::-webkit-scrollbar {
  display: none;
} */

.close-form:hover {
  cursor: pointer;
}

.todo-items-row::-webkit-scrollbar {
  width: 1em;
}

.todo-items-row::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.todo-items-row::-webkit-scrollbar-thumb {
  background-color: #343a40;
  outline: 1px solid #6c757d;
}
</style>
