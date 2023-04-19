<template>
  <tr>
    <td>{{ item.book.name }}</td>
    <td>{{ item.qty }}</td>
    <td>IDR {{ item.book.price.final }}</td>
    <td>IDR {{ item.qty * item.book.price.final }}</td>
    <td class="cart-items__remove-btn">
      <BliButton color="primary" @click="$emit('click')">
        Remove from Cart
      </BliButton>
    </td>
  </tr>
</template>

<script src="./js/cart-item.js"></script>

<style lang="scss" scoped>
.cart-items {
  td { padding-top: 2rem; }
  &__remove-btn { width: 1%; }
}
</style>
