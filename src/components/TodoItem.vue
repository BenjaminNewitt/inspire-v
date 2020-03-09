<template>
  <div class="todo-item">
    <input
      class="d-inline"
      type="checkbox"
      id="checkbox"
      v-model="todoData.completed"
      @click="toggleCompleted"
    />
    <p class="d-inline ml-2" v-if="todoData.completed == false">
      {{ todoData.description }}
    </p>
    <p class="d-inline ml-2 text-muted" v-if="todoData.completed == true">
      <del>{{ todoData.description }}</del>
    </p>
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
    }
  }
};
</script>
