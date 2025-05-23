<template>
  <div class="cart-overlay">
    <div class="cart">
      <div class="cart-header">
        <h2>Your Order</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      
      <div v-if="items.length === 0" class="empty-cart">
        <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart" width="100">
        <p>Your cart is empty</p>
      </div>
      
      <div v-else>
        <div class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.title" class="cart-item-image">
            <div class="item-info">
              <h3>{{ item.title }}</h3>
              <div class="item-controls">
                <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
              </div>
            </div>
            <div class="item-total">
              ${{ (item.price * item.quantity).toFixed(2) }}
              <button @click="$emit('remove-item', item.id)" class="remove-btn">Remove</button>
            </div>
          </div>
        </div>
        
        <div class="cart-total">
          <strong>Total: ${{ total.toFixed(2) }}</strong>
        </div>
        
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }
  },
  methods: {
    increaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId)
      if (item) item.quantity++
    },
    decreaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.$emit('remove-item', itemId)
      }
    }
  }
}
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cart {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.cart-header h2 {
  margin: 0;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #666;
  padding: 0 10px;
}

.empty-cart {
  text-align: center;
  padding: 30px 0;
}

.empty-cart img {
  opacity: 0.5;
  margin-bottom: 15px;
}

.empty-cart p {
  color: #666;
  margin: 0;
  font-size: 1.1rem;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

.item-info {
  flex-grow: 1;
}

.item-info h3 {
  margin: 0 0 8px;
  font-size: 1rem;
  color: #333;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-btn {
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
}

.quantity-btn:hover {
  background: #e0e0e0;
}

.item-total {
  font-weight: bold;
  min-width: 80px;
  text-align: right;
}

.remove-btn {
  display: block;
  margin-top: 5px;
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0;
}

.cart-total {
  text-align: right;
  font-size: 1.2rem;
  margin: 25px 0;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}

.checkout-btn:hover {
  background: #369f6b;
}
</style>