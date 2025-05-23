<template>
  <div class="app">
    <header class="main-header">
      <div class="header-content">
        <div class="logo-container">
          <h1 class="logo">Delicious Bites</h1>
          <p class="tagline">Taste the difference</p>
        </div>
        <nav class="navigation">
          <button class="cart-button" @click="showCart = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-count">{{ cartItems.reduce((total, item) => total + item.quantity, 0) }}</span>
          </button>
        </nav>
      </div>
    </header>
    
    <main>
      <div class="food-list">
        <FoodMenuItem 
          v-for="item in foodItems" 
          :key="item.id"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
    </main>
    
    <ShoppingCart 
      v-if="showCart" 
      :items="cartItems"
      @close="showCart = false"
      @remove-item="removeFromCart"
    />
  </div>
</template>

<script>
import FoodMenuItem from './components/FoodMenuItem.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'FoodOrderApp',
  components: {
    FoodMenuItem,
    ShoppingCart
  },
  data() {
    return {
      showCart: false,
      cartItems: [],
       foodItems: [
        {
          id: 1,
          title: 'Margherita Pizza',
          description: 'Classic pizza with tomato sauce, mozzarella, and basil',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300'
        },
        {
          id: 2,
          title: 'Pepperoni Pizza',
          description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300'
        },
        {
          id: 3,
          title: 'Vegetable Pasta',
          description: 'Pasta with mixed vegetables in a creamy sauce',
          price: 10.99,
          image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300'
        },
        {
          id: 4,
          title: 'Chicken Burger',
          description: 'Juicy chicken patty with lettuce and special sauce',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300'
        },
        {
          id: 5,
          title: 'Grilled Sandwich',
          description: 'Grilled sandwich with veggies and cheese',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 6,
          title: 'French Fries',
          description: 'Crispy golden potato fries with dip',
          price: 4.99,
          image: 'https://media.istockphoto.com/id/502893771/photo/french-fries-12.webp?a=1&b=1&s=612x612&w=0&k=20&c=ignUcTaqDWXIIuTy-7krHi5zAAR49vDzN1JxFCoX2wk='
        },
        {
          id: 7,
          title: 'Chicken Wings',
          description: 'Spicy grilled chicken wings',
          price: 9.99,
          image: 'https://media.istockphoto.com/id/1451323978/photo/baked-chicken-wings-with-sweet-chili-sauce-in-a-plate-black-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=16utPxh1GnWO1lPSMPHAuKQWGvU_MEVa4_HIS4VapjE='
        },
        {
          id: 8,
          title: 'Chocolate Shake',
          description: 'Thick and creamy chocolate shake',
          price: 5.49,
          image: 'https://media.istockphoto.com/id/1126893721/photo/low-key-chocolate-smoothies-on-a-table-in-a-rustic-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=uyQyEubzWmpOYpcHIwV_BJtT9qf14p36O9ttr6nBE2U='
        }
      ]
    }
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
    }
  }
}
</script>

<style>
/* Base Styles */
.app {
  font-family: 'Poppins', 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

/* Header Styles */
.main-header {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  flex-direction: column;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.tagline {
  font-size: 0.9rem;
  margin: 0.2rem 0 0;
  font-weight: 300;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
}

/* Cart Button Styles */
.cart-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.cart-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.cart-button svg {
  width: 1.5rem;
  height: 1.5rem;
}

.cart-count {
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
}

/* Food List Styles */
.food-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .logo {
    font-size: 1.8rem;
  }
  
  .food-list {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>