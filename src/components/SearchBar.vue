<template>
  <BliField leading-icon no-gap type="search">
    <BliInput placeholder="Search for book titles" />
    <BliIconSearch slot="leading-icon" />
    <BliButton color="secondary">Search</BliButton>
  </BliField>
</template>

<script src="./js/search-bar.js"></script>

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
</style>
