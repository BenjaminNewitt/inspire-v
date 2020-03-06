<template>
  <div class="todo">
    <p class="text-right">TODO</p>
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
