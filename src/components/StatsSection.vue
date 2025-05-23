<template>
  <section class="stats-section">
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-icon">🍽️</div>
        <div class="stat-content">
          <span class="stat-number">{{ menuItemCount }}</span>
          <span class="stat-label">Menu Items</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-content">
          <span class="stat-number">4.9</span>
          <span class="stat-label">Rating</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🚚</div>
        <div class="stat-content">
          <span class="stat-number">30min</span>
          <span class="stat-label">Delivery</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  props: {
    menuItemCount: {
      type: Number,
      required: true
    }
  }
}
</script>
