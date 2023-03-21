<template>
  <div class="card-action-buttons">
    <div v-if="isBuyingBooks">
      <BliButton color="secondary" size="small" @click="decrementBookQuantity">
        <BliIconMinus fill="#fff" />
      </BliButton>
      <span>{{ bookQuantity }}</span>
      <BliButton color="secondary" size="small" @click="incrementBookQuantity">
        <BliIconPlus fill="#fff" />
      </BliButton>
    </div>
    <div v-else>
      <BliModal
        class="modal"
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
      <BliButton class="modal__update-btn" color="secondary" size="small">Update</BliButton>
      <BliButton
        class="modal__delete-btn"
        outline
        color="primary"
        size="small"
        @click="visibleModal = true"
      >
        Delete
      </BliButton>
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
    width: 100%;
  }
}

.icon { position: absolute; }
</style>
