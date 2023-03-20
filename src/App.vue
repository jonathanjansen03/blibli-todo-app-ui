<template>
  <div id="blibliApp">
    <header>
      <NavigationBar />
    </header>
    <main>
      <router-view/>
    </main>
    <AppFooter />
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

  @media (max-width: 768px) {
    #blibliApp {
      header, main { padding: 0 2rem; }
    }

    header { margin-bottom: 5%; }
  }

  @media (max-width: 425px) {
    header { margin-bottom: 10%; }
  }

  @media (min-width: 1024px) {
    #blibliApp {
      header, main { padding: 0 14rem; }
    }
  }
</style>
