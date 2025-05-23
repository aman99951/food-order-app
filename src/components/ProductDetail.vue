<template>
  <div class="product-detail">
    <button class="back-button" @click="$router.go(-1)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Menu
    </button>

    <div class="product-container">
      <div class="product-image-container">
        <img :src="product.image" :alt="product.title" class="product-image">
      </div>

      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        
        <div class="product-meta">
          <div class="product-category">{{ product.category }}</div>
          <div class="product-rating">
            <span class="stars">⭐⭐⭐⭐⭐</span>
            <span class="rating-text">4.8</span>
          </div>
        </div>

        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">${{ product.price.toFixed(2) }}</div>

        <div class="quantity-controls">
          <button @click="quantity > 1 ? quantity-- : null" class="quantity-btn">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="quantity++" class="quantity-btn">+</button>
        </div>

        <button @click="addToCart" class="add-to-cart-btn">
          Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
        </button>

        <div class="nutrition-info">
          <h3>Nutritional Information</h3>
          <div class="nutrition-grid">
            <div class="nutrition-item">
              <span>Calories</span>
              <span>650kcal</span>
            </div>
            <!-- Add more nutritional info as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    product() {
      return this.menuItems.find(item => item.id === parseInt(this.$route.params.id)) || {}
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', {
        ...this.product,
        quantity: this.quantity
      })
      this.quantity = 1
    }
  }
}
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #667eea;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.product-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.product-image-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.product-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.product-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.product-category {
  background: #e2e8f0;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
}

.product-price {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 2rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.add-to-cart-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.nutrition-info {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

@media (min-width: 768px) {
  .product-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .product-info {
    padding: 0 2rem;
  }
}
</style>