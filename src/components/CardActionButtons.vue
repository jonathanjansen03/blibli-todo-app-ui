<template>
  <div class="card-action-buttons">
    <div v-if="isBuyingBooks">
      <BliButton color="primary" size="small"><BliIconMinus fill="#fff" /></BliButton>
      <span>0</span>
      <BliButton color="secondary" size="small"><BliIconPlus fill="#fff" /></BliButton>
    </div>
    <div v-else>
      <BliModal
        type="warning"
        :bli-active.sync="visibleModal"
        :controls="customControls"
        @close="visibleModal = false"
        @maskClick="visibleModal = false"
      >
        <BliModalHeader>Are you sure you would like to delete this book?</BliModalHeader>
        <BliModalBody>
          This book's data will be deleted <b>permanently</b> from the database.
        </BliModalBody>
      </BliModal>
      <BliButton color="secondary" size="small">Update</BliButton>
      <BliButton outline color="primary" size="small" @click="visibleModal = true">Delete</BliButton>
    </div>
  </div>
</template>

<script src="./js/card-action-buttons.js"></script>

<style lang="scss" scoped>
.card-action-buttons {
  & > div {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30rem;
    width: 100%;
  }
}

.icon {
  position: absolute;
  z-index: 100;
}
</style>
