<template>
  <div class="home blu">
    <div class="card">
      <h1>Welcome to Toko Buku Blibli!</h1>
      <router-link to="/buy-books" class="link-button">
        <BliButton color="secondary" size="large">Buy Books Now</BliButton>
      </router-link>
    </div>
  </div>
</template>

<script src="./js/home-page.js"></script>

<style lang="scss" scoped>
@import "~@blibli/blue-tokens/dist/blue-tokens";

.home {
  display: flex;
  align-items: center;
  color: $blu-gray-light;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.card {
  font-size: 0.87em;
  text-align: center;

  h1 {
    font-size: 3em;
    color: $blu-gray-light-3;
  }

  button {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  header { margin-bottom: 5%; }

  .card {
    h1 { font-size: 2.75em; }
  }
}

@media (min-width: 1024px) {
  .home {
    display: flex;
    justify-content: center;
  }
}
</style>
