<template>
  <div>
    <div ref="searchInput">
      <SearchBar />
    </div>
    <div class="create-btn-container">
      <router-link to="/books/insert">
        <BliButton color="primary">Insert Book</BliButton>
      </router-link>

      <router-link to="/reports">
        <BliButton color="primary">Create Report</BliButton>
      </router-link>
    </div>
    <BookCard :is-buying-books="false" />
    <BliPagination
      v-if="books.length"
      :total="pagination.totalItems"
      :current.sync="currentPage"
      :per-page="pagination.size"
    >
    </BliPagination>
  </div>
</template>

<script src="./js/manage-books-page.js"></script>

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
