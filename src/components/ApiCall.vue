<template>
  <div class="api-call">
    <div class="api-call-text">You can do api call by using mock api(npm run dev)</div>
    <div class="testAPI">
      <BliButton color="secondary" size="small" @click="getTextAPI" id="testAPI" class="button-blibli">Test API Get</BliButton>
      <p class="returned-api-call">{{ text }}</p>
    </div>

    <div class="testAPI">
      <BliButton color="secondary" size="small" @click="postTextAPI" id="testAPI" class="button-blibli">Test API Post</BliButton>
      <p class="returned-api-call">{{ postText }}</p>
    </div>
  </div>
</template>

<script src="./js/api-call"></script>

<style lang="scss" scoped>
.api-call{
  margin-top: 15%;
}
.api-call-text{
  font-size: 1.2em;
}
.returned-api-call{
  font-size: 17px;
  color: white;
}
.button-blibli{
  width: 7.5em;
}
.testAPI{
  height: 120px;
}
button{
  margin: 8% 0 8% 0;
}
</style>