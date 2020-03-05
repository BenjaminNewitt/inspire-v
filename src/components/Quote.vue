<template>
  <div class="quote text-center">
    <p>{{ quote.quote.body }}</p>
    <p>{{ quote.quote.author }}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  mounted() {
    this.$store.dispatch("getQuote");
  },
  computed: {
    quote() {
      return this.$store.state.quote;
    }
  }
};
</script>
