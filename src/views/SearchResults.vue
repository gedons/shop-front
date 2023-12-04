<template>
  <div>
    <h1>Search Results</h1>
    <div v-if="searchResults.length === 0">
      <p>No results found</p>
    </div>
    <div v-else>
      <div v-for="product in searchResults" :key="product._id">
        <!-- Display each product information as needed -->
        <h2>{{ product.title }}</h2>
        <p>Description: {{ product.description }}</p>
        <!-- Add more product details as required -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../api';
export default {
  data() {
    return {
      searchResults: [] // Initialize an empty array to hold search results
    };
  },

   created() {
    this.fetchSearchResults();
   },

  methods: {
    async fetchSearchResults() {
      try {
        const searchQuery = this.$route.query.q; // Fetch the search query from the route query parameters

        // Make an API call to retrieve search results
        const response = await axios.get(`${api}/products/search?q=${searchQuery}`);
        this.searchResults = response.data.products; // Set search results in the component data
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle error
      }
    }
  }
};
</script>
