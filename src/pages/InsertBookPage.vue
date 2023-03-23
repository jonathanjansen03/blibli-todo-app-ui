<template>
  <BliCard>
    <BliCardContent>
      <div class="insert-book-form">
        <h1 class="insert-book-form__header">Insert Book Form</h1>

        <BliField b-clearable :message="helperMessage.title">
          <label>Book Title</label>
          <BliInput v-model="book.title" maxlength="50" required />
        </BliField>

        <BliField b-clearable :message="helperMessage.author">
          <label>Book Author</label>
          <BliInput v-model="book.author" maxlength="50" />
        </BliField>

        <BliField b-clearable :message="helperMessage.stock">
          <label>Book Stock</label>
          <BliInput v-model.number="book.stock" type="number" />
        </BliField>

        <BliField b-clearable :message="helperMessage.price">
          <label>Book Price</label>
          <BliInput v-model.number="book.price" type="number" />
        </BliField>

        <BliButton color="secondary" @click="handleSubmit">Insert</BliButton>
      </div>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/insert-book-page.js"></script>

<style lang="scss" scoped></style>
