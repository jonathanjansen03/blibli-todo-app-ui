<template>
  <div class="dev-single-product">
    <Component :is="bliProductList()" type="grid-view" class="books-grid">
      <Component
        v-for="(book, index) in books"
        :is="bliProduct()"
        :key="book.id"
        :productInfo="book"
        @click="productClick"
        i18="EN">
      >
        <CardActionButtons slot="product-button" :is-buying-books="isBuyingBooks" :index="index" />
      </Component>
    </Component>
  </div>
</template>

<script src="./js/book-card.js"></script>

<style lang="scss" scoped>
.books-grid {
  margin-top: 0.5rem;
  width: 100%;
  gap: 1rem 2rem;
}
</style>
