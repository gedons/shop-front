<template>
   <pre>{{categories}}</pre>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      // Fetch categories from Vuex store using an action
      this.categories = await this.$store.dispatch('fetchCategories');
    },

  },
};
</script>