<template>
  <div class="app">
    <HeaderSection 
      :cartItemCount="cartItemCount" 
      @open-cart="showCart = true" 
    />

    <!-- only router view renders pages -->
    <router-view 
      @add-to-cart="addToCart"
    ></router-view>

    <ShoppingCart 
      :show="showCart" 
      :items="cartItems"
      @close="showCart = false"
      @increase-quantity="increaseQuantity"
      @decrease-quantity="decreaseQuantity"
      @remove-from-cart="removeFromCart"
      @checkout="handleCheckout"
    />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    ShoppingCart
  },
  data() {
    return {
      showCart: false,
      cartItems: [],
    }
  },
  computed: {
    cartItemCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
  },
  methods: {
    addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId)
    },
    increaseQuantity(item) {
      item.quantity++
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(item.id)
      }
    },
    handleCheckout() {
      alert('Proceeding to checkout!')
      this.showCart = false
    }
  }
}
</script>
