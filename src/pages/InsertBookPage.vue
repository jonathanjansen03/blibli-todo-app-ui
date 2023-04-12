<template>
  <BliCard>
    <BliCardContent>
      <BackButton path="/books/manage" />
      <div class="insert-book-form">
        <h1 class="insert-book-form__header">Insert Book Form</h1>

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
          <label>Book Price</label>
        </BliField>

        <BliButton color="secondary" @click="handleSubmit">Insert</BliButton>
      </div>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/insert-book-page.js"></script>

<style lang="scss" scoped></style>
