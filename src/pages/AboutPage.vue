<template>
  <div class="about blu">
    <h1>This is an About page</h1>
    <BliCard>
      <BliCardContent>
          This is a standalone template project using external blibli DLS.
      </BliCardContent>
    </BliCard>
    <a href="https://blue.blibli.com/documentation" class="button-doc">
      <BliButton outline color="white" size="small">View Documentation</BliButton>
    </a>
  </div>
</template>

<script src="./js/about-page"></script>

<style lang="scss" scoped>
@import '~@blibli/blue-tokens/dist/blue-tokens.scss';

.about{
  min-height: 50vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  h1{
    font-size: 2.4em;
    color: $blu-gray-light-3;
  }
  .button-doc{
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
