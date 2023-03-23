<template>
  <div>
    <SearchBar />
    <div class="create-btn-container">
      <router-link to="/insert-book">
        <BliButton color="primary">Insert Book</BliButton>
      </router-link>

      <router-link to="/create-report">
        <BliButton color="primary">Create Report</BliButton>
      </router-link>
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
