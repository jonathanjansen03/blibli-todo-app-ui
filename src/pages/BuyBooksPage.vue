<template>
  <div>
    <div ref="searchInput">
      <SearchBar />
    </div>
    <BookCard :is-buying-books="true" />
    <BliPagination
      v-if="books.length"
      :total="pagination.totalItems"
      :current.sync="currentPage"
      :per-page="pagination.size"
    >
    </BliPagination>
  </div>
</template>

<script src="./js/buy-books-page.js"></script>

<style lang="scss" scoped>
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

.blu-paging {
  display: flex;
  justify-content: center;
}
</style>
