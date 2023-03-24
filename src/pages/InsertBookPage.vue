<template>
  <div>
    <BackButton path="/books/manage" />
    <BliCard>
      <BliCardContent>
        <div class="insert-book-form">
          <h1 class="insert-book-form__header">Insert Book Form</h1>

          <BliField b-clearable :message="helperMessage.title">
            <BliInput v-model="book.title" maxlength="50" required />
            <label>Book Title</label>
          </BliField>

          <BliField b-clearable :message="helperMessage.author">
            <BliInput v-model="book.author" maxlength="50" />
            <label>Book Author</label>
          </BliField>

          <BliField b-clearable :message="helperMessage.stock">
            <BliInput v-model.number="book.stock" type="number" />
            <label>Book Stock</label>
          </BliField>

          <BliField b-clearable :message="helperMessage.price">
            <BliInput v-model.number="book.price" type="number" />
            <label>Book Price</label>
          </BliField>

          <BliButton color="secondary" @click="handleSubmit">Insert</BliButton>
        </div>
      </BliCardContent>
    </BliCard>
  </div>
</template>

<script src="./js/insert-book-page.js"></script>

<style lang="scss" scoped></style>
