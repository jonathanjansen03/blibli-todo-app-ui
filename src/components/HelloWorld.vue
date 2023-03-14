<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<script src="./js/hello-world.js"></script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  font-weight: 500;
  font-size: 48px;
  font-family: 'Segoe UI', sans-serif;
}

.green { color: hsla(160, 100%, 37%, 1); }

.greetings { text-align: center; }

.read-the-docs {
  color: #888888;
  font-family: 'Segoe UI', sans-serif;
  font-size: 15px;
  margin-bottom: 3%;
}

@media (max-width: 768px) {
  h1 { margin-top: 0; }
}
</style>
