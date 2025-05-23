<template>
  <section class="search-section">
    <div class="search-container">
      <div class="search-bar">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search delicious food..."
          class="search-input"
          @input="$emit('search', searchQuery)"
        >
      </div>
      
      <div class="filter-tabs">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="$emit('filter', category)"
          class="filter-tab"
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchSection',
  props: {
    categories: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>
