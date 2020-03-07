<template>
  <div class="todo-item">
    <p>{{ todoData.description }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoData"]
};
</script>
