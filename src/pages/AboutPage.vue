<template>
  <div class="about blu">
    <h1 class="about__header">About this project</h1>
    <BliCard>
      <BliCardContent>
          This is a mini project made by Brayan, Jansen, and Winston given by
          our mentors to aid us in our learning Blibli's tech stacks.
      </BliCardContent>
    </BliCard>
  </div>
</template>

<script src="./js/about-page.js"></script>

<style lang="scss" scoped>
@import "~@blibli/blue-tokens/dist/blue-tokens.scss";

.about {
  min-height: 50vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  &__header {
    font-size: 2.4em;
    color: $blu-gray-light-3;
  }

  .button-doc {
    margin-top: 5%;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    justify-content: center;
  }
}
</style>
