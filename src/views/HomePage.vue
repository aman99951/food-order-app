<template>
  <div class="homepage">
    <!-- Main content for homepage -->
    <main class="main-content">
      <!-- Search and filter -->
      <SearchSection 
        :categories="categories" 
        :selectedCategory="selectedCategory"
        @search="handleSearch"
        @filter="selectedCategory = $event"
      />

      <!-- Stats showing total menu item count -->
      <StatsSection :menuItemCount="filteredItems.length" />

      <!-- Menu with filtered items -->
      <MenuSection 
        :filteredItems="filteredItems" 
        @add-to-cart="addToCart"
        @select-item="selectItem"
      />
    </main>
  </div>
</template>

<script>
import SearchSection from '../components/SearchSection.vue'
import StatsSection from '../components/StatsSection.vue'
import MenuSection from '../components/MenuSection.vue'

export default {
  name: 'HomePage',
  components: {
    SearchSection,
    StatsSection,
    MenuSection
  },
  data() {
    return {
      showCart: false,
      searchQuery: '',
      selectedCategory: 'All',
      cartItems: [],
      categories: ['All', 'Pizza', 'Pasta', 'Burgers', 'Sides', 'Drinks'],
       foodItems: [
        {
          id: 1,
          title: 'Margherita Pizza',
          description: 'Classic pizza with tomato sauce, mozzarella, and basil',
          price: 12.99,
          category: 'Pizza',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
        },
        {
          id: 2,
          title: 'Pepperoni Pizza',
          description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
          price: 14.99,
          category: 'Pizza',
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400'
        },
        {
          id: 3,
          title: 'Vegetable Pasta',
          description: 'Pasta with mixed vegetables in a creamy sauce',
          price: 10.99,
          category: 'Pasta',
          image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400'
        },
        {
          id: 4,
          title: 'Chicken Burger',
          description: 'Juicy chicken patty with lettuce and special sauce',
          price: 8.99,
          category: 'Burgers',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
        },
        {
          id: 5,
          title: 'Grilled Sandwich',
          description: 'Grilled sandwich with veggies and cheese',
          price: 6.99,
          category: 'Sides',
          image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400'
        },
        {
          id: 6,
          title: 'French Fries',
          description: 'Crispy golden potato fries with dip',
          price: 4.99,
          category: 'Sides',
         image: 'https://media.istockphoto.com/id/502893771/photo/french-fries-12.webp?a=1&b=1&s=612x612&w=0&k=20&c=ignUcTaqDWXIIuTy-7krHi5zAAR49vDzN1JxFCoX2wk='
      
        },
        {
          id: 7,
          title: 'Chicken Wings',
          description: 'Spicy grilled chicken wings',
          price: 9.99,
          category: 'Sides',
         image: 'https://media.istockphoto.com/id/1451323978/photo/baked-chicken-wings-with-sweet-chili-sauce-in-a-plate-black-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=16utPxh1GnWO1lPSMPHAuKQWGvU_MEVa4_HIS4VapjE='
     },
        {
          id: 8,
          title: 'Chocolate Shake',
          description: 'Thick and creamy chocolate shake',
          price: 5.49,
          category: 'Drinks',
          image: 'https://media.istockphoto.com/id/1126893721/photo/low-key-chocolate-smoothies-on-a-table-in-a-rustic-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=uyQyEubzWmpOYpcHIwV_BJtT9qf14p36O9ttr6nBE2U='
     }
      ]
    }
  },
  computed: {
    cartItemCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    filteredItems() {
      let filtered = this.foodItems

      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(item => item.category === this.selectedCategory)
      }

      if (this.searchQuery) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      return filtered
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query
    },
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
    selectItem(item) {
      console.log('Selected item:', item)
    },
    handleCheckout() {
      alert('Proceeding to checkout!')
      this.showCart = false
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
