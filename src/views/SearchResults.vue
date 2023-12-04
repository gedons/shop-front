<template>
    <div>
      <h1>Search Results</h1>
      <div v-if="searchResults.length === 0">
        <p>No results found for '{{ searchQuery }}'.</p>
      </div>
      <div v-else>
        <div v-for="result in searchResults" :key="result._id">
          <!-- Display each search result here -->
          <p>{{ result.title }}</p>
          <!-- Add more details or customize the display as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import api from '../api'; // Your API endpoint
  
  export default {
    data() {
      return {
        searchQuery: '',  
        searchResults: [],
      };
    },
    created() {
      // Fetch search results when component mounts (optional)
      this.searchQuery = this.$route.query.searchQuery || '';
      this.searchProducts();
    },
    methods: {
      async searchProducts() {
        try {
          const response = await axios.get(`${api}/products/search`, {
            params: { query: this.searchQuery },
          });
          this.searchResults = response.data.products;
        } catch (error) {
          console.error('Error fetching search results:', error);
          // Handle error
        }
      },
    },
    watch: {
      searchQuery() {
        if (this.searchQuery.length > 2) {
          this.searchProducts();
        }
      },
    },
   
  };
  </script>
  