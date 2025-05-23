<template>
  <div v-if="show" class="cart-overlay" @click="$emit('close')">
    <div class="cart-modal" @click.stop>
      <div class="cart-header">
        <h3>Your Order</h3>
        <button @click="$emit('close')" class="close-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="cart-content">
        <div v-if="items.length === 0" class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>Your cart is empty</p>
          <p class="empty-cart-subtitle">Add some delicious items to get started!</p>
        </div>
        
        <div v-else class="cart-items">
          <CartItem 
            v-for="item in items" 
            :key="item.id" 
            :item="item"
            @increase="increaseQuantity(item)"
            @decrease="decreaseQuantity(item)"
            @remove="removeFromCart(item.id)"
          />
        </div>
      </div>
      
      <CartFooter 
        v-if="items.length > 0" 
        :cartTotal="cartTotal"
        @checkout="$emit('checkout')"
      />
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import CartFooter from './CartFooter.vue'

export default {
  name: 'ShoppingCart',
  components: { CartItem, CartFooter },
  props: {
    show: Boolean,
    items: Array
  },
  computed: {
    cartTotal() {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  methods: {
    increaseQuantity(item) {
      this.$emit('increase-quantity', item)
    },
    decreaseQuantity(item) {
      this.$emit('decrease-quantity', item)
    },
    removeFromCart(itemId) {
      this.$emit('remove-from-cart', itemId)
    }
  }
}
</script>
