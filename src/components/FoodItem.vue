<template>
   <router-link 
    :to="{ name: 'product', params: { id: item.id }}"
    class="food-card"
  >
    <div class="food-image-container">
      <img :src="item.image" :alt="item.title" class="food-image">
      <div class="food-overlay">
        <button @click.stop="$emit('add-to-cart', item)" class="quick-add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div class="food-badge">Popular</div>
    </div>
    
    <div class="food-content">
      <h3 class="food-title">{{ item.title }}</h3>
      <p class="food-description">{{ item.description }}</p>
      
      <div class="food-footer">
        <div class="food-rating">
          <span class="stars">⭐⭐⭐⭐⭐</span>
          <span class="rating-text">4.8</span>
        </div>
        <div class="food-price">${{ item.price.toFixed(2) }}</div>
      </div>
      
      <button @click.stop="$emit('add-to-cart', item)" class="add-to-cart-btn">
        Order
      </button>
    </div>
   </router-link>
</template>

<script>
export default {
  name: 'FoodItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Copy all food item styles from original App.vue here */
.food-card {
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}
/* Add all other food item styles here */
</style>