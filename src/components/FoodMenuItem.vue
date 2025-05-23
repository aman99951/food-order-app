<template>
  <div class="food-item">
    <img :src="item.image" :alt="item.title" class="food-image">
    <div class="food-details">
      <h3>{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
      <div class="price-add">
        <span class="price">${{ item.price.toFixed(2) }}</span>
        <button @click="$emit('add-to-cart', item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodMenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.food-item {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background: white;
}

.food-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.food-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.food-details {
  padding: 20px;
}

.food-details h3 {
  margin: 0 0 10px;
  font-size: 1.3rem;
  color: #2c3e50;
}

.description {
  color: #666;
  margin: 0 0 15px;
  line-height: 1.5;
}

.price-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #42b983;
}

button {
  padding: 8px 15px;
  font-size: 0.9rem;
}
</style>