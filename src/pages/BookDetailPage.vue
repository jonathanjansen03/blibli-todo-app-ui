<template>
  <div>
    <BackButton :path="'/books/buy'" />
    <BliCard>
      <BliCardContent>
        <div class="book-detail">
          <img :src="book.imageUrl" alt="Book Image" class="book-detail__img">
          <div class="book-detail_info">
            <h2 class="book-detail__name">{{ book.name }}</h2>
            <p>Author(s): {{ book.seller.name }}</p>
            <p>Price: IDR {{ book.price.final }}</p>
            <p>Stock: {{ book.stock }}</p>
          </div>
          <div class="dev-input-stepper__wrapper">
            <BliInputStepper :isActive="false">
              <BliButton slot="minus-button" class="blu-input-stepper__minus" :disabled="minusBtnDisabled"
                         @click="minusClick">
                <BliIconMinus fill="#0095DA" />
              </BliButton>
              <BliField slot="input-stepper" class="blu-input-stepper__input">
                <BliInput type="number" v-model.number="qty" @blur="blurInput" @focus="focusInput" />
              </BliField>
              <BliButton slot="plus-button" class="blu-input-stepper__plus" :disabled="plusBtnDisabled"
                         @click="plusClick">
                <BliIconPlus fill="#0095DA" />
              </BliButton>
            </BliInputStepper>
          </div>
          <BliButton color="primary" size="large" @click="addToCartClick">
            Add to Cart
          </BliButton>
        </div>
      </BliCardContent>
    </BliCard>
  </div>
</template>

<script src="./js/book-detail-page.js"></script>

<style lang="scss" scoped>
.blu-card {
  margin-right: auto;
  margin-left: auto;
}

.book-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  &__img {
    height: auto;
    width: 50%;
    border-radius: 5%;
    margin-left: auto;
    margin-right: auto;
  }

  &__name { text-align: center; }
}

.dev-input-stepper__wrapper {
  width: 12rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .book-detail {
    &__name { font-size: 1.8rem; }
  }
}

@media (max-width: 425px) {
  .book-detail {
    &__name { font-size: 1.5rem; }

    p { font-size: 1.3rem; }
  }
}
</style>
