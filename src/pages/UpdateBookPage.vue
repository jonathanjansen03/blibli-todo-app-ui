<template>
  <BliCard>
    <BliCardContent>
      <BackButton path="/books/manage" />
      <div class="insert-book-form">
        <h1 class="insert-book-form__header">Update Book Form</h1>

        <BliField
          :type="isValidTitle ? '' : 'danger'"
          :message="isValidTitle ? helperMessage.title : errors.title"
          b-clearable
        >
          <BliInput v-model="book.title" maxlength="50" required />
          <label>Book Title</label>
        </BliField>

        <BliField
          :type="isValidAuthor ? '' : 'danger'"
          :message="isValidAuthor ? helperMessage.author : errors.author"
          b-clearable
        >
          <BliInput v-model="book.author" maxlength="50" />
          <label>Book Author</label>
        </BliField>

        <BliField
          :type="isValidStock ? '' : 'danger'"
          :message="isValidStock ? helperMessage.stock : errors.stock"
          b-clearable
        >
          <BliInput v-model.number="book.stock" type="number" />
          <label>Book Stock</label>
        </BliField>

        <BliField
          :type="isValidPrice ? '' : 'danger'"
          :message="isValidPrice ? helperMessage.price : errors.price"
          b-clearable
        >
          <BliInput v-model.number="book.price" type="number" />
          <label>Book Price (before discount)</label>
        </BliField>

        <BliField
          :type="isValidDiscount ? '' : 'danger'"
          :message="isValidDiscount ? helperMessage.discount : errors.discount"
          b-clearable
        >
          <BliInput v-model.number="book.discount" type="number" />
          <label>Book Discount</label>
        </BliField>

        <BliButton color="secondary" @click="handleSubmit">Update</BliButton>
      </div>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/update-book-page.js"></script>

<style lang="scss" scoped></style>
