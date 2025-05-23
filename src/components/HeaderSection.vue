<template>
  <header class="hero-header">
    <div class="header-background">
      <div class="floating-food-icons">
        <div class="food-icon" v-for="n in 6" :key="n">🍕</div>
      </div>
    </div>
    
    <div class="header-content">
      <div class="logo-section">
        <div class="logo-wrapper">
          <h1 class="logo">Delicious Bites</h1>
          <div class="logo-accent"></div>
        </div>
        <p class="tagline">Crafted with love, delivered with care</p>
      </div>
      
      <div class="header-actions">
        <button class="cart-button" @click="$emit('open-cart')" :class="{ 'has-items': cartItemCount > 0 }">
          <div class="cart-icon-wrapper">
            <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
          </div>
          <span class="cart-text">Cart</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    cartItemCount: {
      type: Number,
      default: 0
    }
  }
}
</script>
