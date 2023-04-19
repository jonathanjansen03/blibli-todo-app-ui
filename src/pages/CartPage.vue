<template>
  <BliCard>
    <BliCardContent>
      <div v-if="isCartEmpty">
        <h1 class="empty-cart-msg">There are no items in your cart.</h1>
      </div>

      <table v-if="!isCartEmpty" class="cart-items">
        <thead>
        <tr class="cart-items__headers">
          <th><h3>Book</h3></th>
          <th><h3>Qty</h3></th>
          <th><h3>Price</h3></th>
          <th colspan="2"><h3>Subtotal</h3></th>
        </tr>
        </thead>
        <tbody>
        <CartItem v-for="(item, index) in cartItems" :key="item.id" :item="item" @click="removeItem(index)" />
        <tr>
          <td colspan="3"><h3>Total</h3></td>
          <td><h3>IDR {{ getTotalPrice() }}</h3></td>
          <td><BliButton color="secondary" @click="checkout">Checkout</BliButton></td>
        </tr>
        </tbody>
      </table>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/cart-page.js"></script>

<style lang="scss" scoped>
@import "~@blibli/blue-tokens/dist/blue-tokens";

.cart-items {
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    margin-bottom: 1rem;
    border-bottom: 1px solid $blu-gray;
  }

  td { padding-top: 2rem; }
}

.empty-cart-msg { text-align: center; }
</style>
