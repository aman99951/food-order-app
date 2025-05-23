<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.title" class="cart-item-image">
    <div class="cart-item-details">
      <h4>{{ item.title }}</h4>
      <p>${{ item.price.toFixed(2) }} each</p>
    </div>
    <div class="quantity-controls">
      <button @click="$emit('decrease')" class="quantity-btn">-</button>
      <span class="quantity">{{ item.quantity }}</span>
      <button @click="$emit('increase')" class="quantity-btn">+</button>
    </div>
    <button @click="$emit('remove')" class="remove-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="3,6 5,6 21,6"></polyline>
        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
