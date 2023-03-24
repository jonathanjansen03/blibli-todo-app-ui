<template>
  <router-link :to="path">
    <BliButton color="secondary" size="small" @click="clickHandler">&lt; Back</BliButton>
  </router-link>
</template>

<script src="./js/back-button.js"></script>

<style lang="scss" scoped>
.blu-btn { margin-bottom: 1rem; }
</style>
