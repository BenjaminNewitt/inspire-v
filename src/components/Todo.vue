<template>
  <div class="todo"></div>
</template>

<script>
export default {
  name: "Todo",
  mounted() {
    this.$store.dispatch("getTodos");
  }
};
</script>
