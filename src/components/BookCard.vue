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
        <div class="product-btn-container" slot="product-button">
          <BliButton color="secondary">Update</BliButton>
          <BliButton outline color="primary">Delete</BliButton>
        </div>
      </Component>
    </Component>
  </div>
</template>

<script src="./js/book-card.js"></script>

<style lang="scss" scoped>
.books-grid {
  width: 100%;
  column-gap: 2rem;

  .blu-product {
    margin: 1rem 0 0;

    &__btn {
      position: relative;
    }
  }
}

.product-btn-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 30rem;
}
</style>
