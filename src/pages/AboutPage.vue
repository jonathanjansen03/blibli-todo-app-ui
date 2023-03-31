<template>
  <div class="about blu">
    <h1 class="about__header about--my-2">About this project</h1>
    <BliCard border-radius="8px">
      <BliCardContent >
        <div class="about--my-2">
          <h2 class="about--text-align-left">Background</h2>
          <BliCard class="about--bg-blue" border-radius="8px">
            <BliCardContent class="about--text-align-justify">
              This is a FrontEnd implementation of our mini project to test our skills and knowledge
              from our training for the last weeks we have been placed in the Blibli Enticement Squad.
              We hope that this website can become a solid foundation for our skills and knowledge to further
              improve our skills and knowledge about the Vue.js and Spring Boot frameworks.
            </BliCardContent>
          </BliCard>
        </div>

        <div class="about--my-2">
          <h2 class="about--text-align-left">Members</h2>
          <BliCard class="about--bg-orange" border-radius="8px">
            <BliCardContent class="about--text-align-justify">
              <BliList>
                <BliListContent>
                  Winston Adinata Kusumo
                </BliListContent>
                <BliListContent>
                  Jonathan Jansen Subroto
                </BliListContent>
                <BliListContent>
                  Bryan Esten
                </BliListContent>
              </BliList>
            </BliCardContent>
          </BliCard>
        </div>

        <div class="about--my-2">
          <h2 class="about--text-align-left">Purpose</h2>
          <BliCard class="about--bg-green" border-radius="8px">
            <BliCardContent class="about--text-align-justify">
              <BliList>
                <BliListContent>
                  Skill and Knowledge
                </BliListContent>
                <BliListContent>
                  Collaboration and Teamwork
                </BliListContent>
                <BliListContent>
                  Resolve Problem and Search for Solution
                </BliListContent>
              </BliList>
            </BliCardContent>
          </BliCard>
        </div>
      </BliCardContent>
    </BliCard>
  </div>
</template>

<script src="./js/about-page.js"></script>

<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/utils/_variable.scss";

.text-align-left {
  text-align: left;
}

.my-2 {
  margin: 20px 0;
}

.text-black {
  color: black;
}

.text-align-justify {
  text-align: justify;
}

.about {
  min-height: 50vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  &__header {
    font-size: 2.4em;
    color: $gray-light-3;
  }

  &--my-2 { margin: 20px 0; }

  &--bg-blue {
    background: $blue-light-1;
  }

  &--bg-orange {
    background: $orange-light-1;
  }

  &--bg-green {
    background: $lime-light-1;
  }

  &--text-align-left { text-align: left; }

  &--text-black { color: black; }

  &--text-align-justify { text-align: justify; }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    justify-content: center;
  }
}
</style>
