<template>
  <div>
    <BliField leading-icon b-clearable no-gap type="search">
      <BliInput placeholder="Search for book titles" />
      <BliIconSearch slot="leading-icon" />
      <BliButton color="primary">Search</BliButton>
    </BliField>
    <div class="create-btn-container">
      <BliButton color="secondary">Insert Book</BliButton>
      <BliButton color="secondary">Make Report</BliButton>
    </div>
    <BookCard />
  </div>
</template>

<script src="./js/manage-books-page.js"></script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.blu-field {
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
  }

  button {
    margin-left: -7.7rem;
  }
}

.create-btn-container {
  display: flex;
  flex-direction: row;
  justify-content: end;

  button {
    margin: 1rem 0 0 1rem;
  }
}
</style>
