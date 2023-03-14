<template>
  <div id="blibliApp">
    <header>
      <nav>
        <div class="logo-wrapper">
          <router-link to="/"><img src="@/assets/images/blibli-logo.png" alt="Logo"></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/" class="link-button">Home</router-link>
          <router-link to="/buy-books" class="link-button">Buy Books</router-link>
          <router-link to="/manage-books" class="link-button">Manage Books</router-link>
          <router-link to="/about" class="link-button">About</router-link>
          <div class="x-btn" @click="toggleNavbar">x</div>
        </div>
        <div class="toggle-navbar-btn" @click="toggleNavbar">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss" scoped>
@import "~@blibli/blue-tokens/dist/blue-tokens";

#blibliApp {
  margin: 0 auto;
  background: $blu-black-high;
  min-height: 100vh;
}

header {
  line-height: 2;
  max-height: 100vh;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 1rem;
  text-align: center;
  width: 100%;

  & .logo-wrapper { width: 15rem; }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-left: 1px solid rgba(84, 84, 84, 0.48);

    &.router-link-exact-active { color: hsla(160, 100%, 37%, 1); }

    &:first-of-type { border: 0; }

    &:hover {
      background-color: transparent;
    }
  }

  & .nav-links { display: flex; }

  & .toggle-navbar-btn {
    color: white;
    display: none;
    font-size: 3rem;
  }

  & .x-btn {
    display: none;
    color: white;
  }
}

.link-button {
  font-size: 1.6rem;
  color: white;
  width: 15rem;

  &:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    border-radius: 0.4em;
  }
}

p {
  color: white;
}

@media (max-width: 768px) {
  header { margin-bottom: 5%; }

  nav {


    & .nav-links {
      display: none;
      position: absolute;
      top: 8rem;

      & a {
        display: block;
        border-left: 0;
        text-align: left;
      }
    }

    & .toggle-navbar {
      background-color: $blu-black;
      display: block;
      padding-top: 3rem;
      position: fixed;
      height: 100%;
      right: 0;
      top: 0;

      & a {
        display: block;
        text-align: left;
      }
    }

    & .toggle-navbar-btn {
      display: flex;
      align-items: center;
    }

    & .x-btn {
      display: block;
      position: absolute;
      top: 0.5rem;
      right: 1rem;
    }
  }
}

@media (max-width: 425px) {
  header { margin-bottom: 10%; }
}

@media (min-width: 1024px) {
  #blibliApp { padding: 0 14rem; }

  nav { padding: 2rem 0 1rem; }
}
</style>
