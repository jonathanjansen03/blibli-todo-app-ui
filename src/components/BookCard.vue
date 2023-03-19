<template>
  <div class="dev-single-product">
    <Component :is="bliProductList()" type="grid-view" class="books-grid">
      <Component
        v-for="(item, idx) in totalProducts"
        :is="bliProduct()"
        :key="idx"
        :productInfo="productInfo"
        @click="productClick"
        i18="EN">
        <CardActionButtons slot="product-button" :is-buying-books="isBuyingBooks" />
      </Component>
    </Component>
  </div>
</template>

<script src="./js/book-card.js"></script>

<style lang="scss" scoped>
.books-grid {
  width: 100%;
  gap: 1rem 2rem;

  .blu-product { margin: 1rem 0 0; }
}
</style>
