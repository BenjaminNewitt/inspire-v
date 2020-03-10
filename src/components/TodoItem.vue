<template>
  <div class="todo-item">
    <div class="row">
      <div class="col-1">
        <input
          type="checkbox"
          id="checkbox"
          v-model="todoData.completed"
          @click="toggleCompleted"
        />
      </div>
      <div class="col-9">
        <p v-if="todoData.completed == false">
          {{ todoData.description }}
        </p>
        <p class="text-muted" v-if="todoData.completed == true">
          <del>{{ todoData.description }}</del>
        </p>
      </div>
      <div class="col-1">
        <i
          class=" fas fa-times text-danger delete-button"
          @click="deleteTodo"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoData"],
  methods: {
    toggleCompleted() {
      if (this.todoData.completed == true) {
        this.todoData.completed = false;
      } else {
        this.todoData.completed = true;
      }
      this.$store.dispatch("editTodo", this.todoData);
    },
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todoData._id);
    }
  }
};
</script>

<style scoped>
.delete-button {
  text-align: right;
}

.delete-button:hover {
  cursor: pointer;
}
</style>
