<template>
  <div class="cart-footer">
    <div class="cart-total">
      <div class="total-row">
        <span>Subtotal:</span>
        <span>${{ cartTotal.toFixed(2) }}</span>
      </div>
      <div class="total-row">
        <span>Delivery:</span>
        <span>$3.99</span>
      </div>
      <div class="total-row total-final">
        <span>Total:</span>
        <span>${{ (cartTotal + 3.99).toFixed(2) }}</span>
      </div>
    </div>
    <button class="checkout-btn" @click="$emit('checkout')">
      Proceed to Checkout
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  props: {
    cartTotal: {
      type: Number,
      required: true
    }
  }
}
</script>

