<template>
  <div class="about blu">
    <h1 class="about__header my-2">About this project</h1>
    <BliCard border-radius="8px">
      <BliCardContent >
        <div class="my-2">
          <h2 class="text-align-left">Background</h2>
          <BliCard class="bg-blue" border-radius="8px">
            <BliCardContent class="text-align-justify">
              This is a FrontEnd implementation of our mini project to test our skills and knowledge
              from our training for the last weeks we have been placed in the Blibli Enticement Squad.
              We hope that this website can become a solid foundation for our skills and knowledge to further
              improve our skills and knowledge about Vue.js as a Framework based on Javascript.
            </BliCardContent>
          </BliCard>
        </div>

        <div class="my-2">
          <h2 class="text-align-left">Member</h2>
          <BliCard class="bg-orange" border-radius="8px">
            <BliCardContent class="text-align-justify">
              <BliList>
                <BliListItem value="">
                  Winston Adinata Kusumo
                </BliListItem>
                <BliListItem value="">
                  Jonathan Janson Subroto
                </BliListItem>
                <BliListItem value="">
                  Bryan Esten
                </BliListItem>
              </BliList>
            </BliCardContent>
          </BliCard>
        </div>

        <div class="my-2">
          <h2 class="text-align-left">Purpose</h2>
          <BliCard class="bg-green" border-radius="8px">
            <BliCardContent class="text-align-justify">
              <BliList>
                <BliListItem value="">
                  Skill and Knowledge
                </BliListItem>
                <BliListItem value="">
                  Collaboration and Teamwork
                </BliListItem>
                <BliListItem value="">
                  Resolve Problem and Search for Solution
                </BliListItem>
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
@import "~@blibli/blue-tokens/dist/blue-tokens.scss";

.bg-blue {
  background: #0095DA;
}

.bg-green {
  background: #00B25A;
}

.bg-orange {
  background: #F7931E;
}

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
