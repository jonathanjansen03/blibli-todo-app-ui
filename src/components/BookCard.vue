<template>
  <div>
    <div v-if="isEmpty"><h1 class="no-books-msg">There are no books.</h1></div>
    <div v-if="!isEmpty" class="dev-single-product">
      <Component :is="bliProductList()" type="grid-view" class="books-grid">
        <Component
          v-for="(book, index) in books"
          :is="bliProduct()"
          :key="book.id"
          :productInfo="book"
          i18="EN"
          show-seller-name
        >
          <CardActionButtons slot="product-button" :is-buying-books="isBuyingBooks" :index="index" />
        </Component>
      </Component>
    </div>
  </div>

</template>

<script src="./js/book-card.js"></script>

<style lang="scss" scoped>
.books-grid {
  margin-top: 0.5rem;
  width: 100%;
  gap: 1rem 2rem;
}

.blu-product__btm { padding-bottom: 100px; }

.no-books-msg {
  color: #ffffff;
  text-align: center;
}
</style>
