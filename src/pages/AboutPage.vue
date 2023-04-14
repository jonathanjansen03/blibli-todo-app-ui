<template>
  <div class="about blu">
    <h1 class="about__header about--my-2">{{ $t('about.title') }}</h1>
    <BliCard border-radius="8px">
      <BliCardContent>
        <div class="about--my-2">
          <h2 class="about--text-align-left">{{ $t('about.background.title') }}</h2>
          <BliCard class="about--bg-blue" border-radius="8px">
            <BliCardContent class="about--text-align-justify">
              {{ $t('about.background.content') }}
            </BliCardContent>
          </BliCard>
        </div>

        <div class="about--my-2">
          <h2 class="about--text-align-left">{{ $t('about.members.title') }}</h2>
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
          <h2 class="about--text-align-left">{{ $t('about.purpose.title') }}</h2>
          <BliCard class="about--bg-green" border-radius="8px">
            <BliCardContent class="about--text-align-justify">
              <BliList>
                <BliListContent>
                  {{ $t('about.purpose.content.vue-spring') }}
                </BliListContent>
                <BliListContent>
                  {{ $t('about.purpose.content.collaboration-teamwork') }}
                </BliListContent>
                <BliListContent>
                  {{ $t('about.purpose.content.critical-thinking-probsol') }}
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
@import "~@blibli/blue-tokens/dist/blue-tokens";

.text-align-left {
  text-align: left;
}

.my-2 {
  margin: 20px 0;
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

  &--my-2 { margin: 20px 0; }

  &--bg-blue {
    background: $blu-blue-light-1;
  }

  &--bg-orange {
    background: $blu-orange-light-1;
  }

  &--bg-green {
    background: $blu-lime-light-1;
  }

  &--text-align-left { text-align: left; }

  &--text-align-justify { text-align: justify; }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    justify-content: center;
  }
}
</style>
