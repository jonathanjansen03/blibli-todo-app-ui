<template>
  <div class="dev-single-product">
    <Component :is="bliProductList()" type="grid-view" class="books-grid">
      <Component
        v-for="book in books"
        :is="bliProduct()"
        :key="book.id"
        :productInfo="book"
        @click="productClick"
        i18="EN">
      >
        <CardActionButtons slot="product-button" :is-buying-books="isBuyingBooks" :book-id="book.id" />
      </Component>
    </Component>
  </div>
</template>

<script src="./js/book-card.js"></script>

<style lang="scss" scoped>
.books-grid {
  width: 100%;
  gap: 1rem 2rem;
}
</style>
