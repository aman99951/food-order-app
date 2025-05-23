<template>
  <section class="menu-section">
    <div class="section-header">
      <h2 class="section-title">Our Menu</h2>
      <p class="section-subtitle">Discover our carefully curated selection of delicious dishes</p>
    </div>
    
    <div class="food-grid">
      <FoodItem 
        v-for="item in filteredItems" 
        :key="item.id"
        :item="item"
        @add-to-cart="$emit('add-to-cart', item)"
        @select-item="$emit('select-item', item)"
      />
    </div>
  </section>
</template>

<script>
import FoodItem from './FoodItem.vue'

export default {
  name: 'MenuSection',
  components: { FoodItem },
  props: {
    filteredItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Copy all menu section styles from original App.vue here */
.menu-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}
/* Add all other menu section styles here */
</style>