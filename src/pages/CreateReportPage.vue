<template>
  <BliCard>
    <BliCardContent>
      <BackButton :path="'/books/manage'" />
      <div v-if="isNotShowingResult" class="create-report-form">
        <h1 class="create-report-form__header">Create Report Form</h1>
        <BliDropdown v-model="month" selection autoclose>
          <label slot="label">Select Month</label>
          <BliList scrollable>
            <BliListItem v-for="month in months" :key="month.value" :value="month.value">
              {{ month.text }}
            </BliListItem>
          </BliList>
        </BliDropdown>

        <BliDropdown v-model="year" selection autoclose>
          <label slot="label">Select Year</label>
          <BliList scrollable>
            <BliListItem v-for="year in years" :key="year" :value="year">
              {{ year }}
            </BliListItem>
          </BliList>
        </BliDropdown>

        <BliButton color="secondary" @click="createReport">Create Report</BliButton>
      </div>
      <div v-if="!isNotShowingResult">
        <div v-if="transactions.length">
          <h1>{{ month.text }} {{ year.text }} Transactions</h1>
          <table class="book-list">
            <thead>
            <tr class="book-list__headers">
              <th><h3>Book</h3></th>
              <th><h3>Qty</h3></th>
              <th><h3>Price</h3></th>
              <th><h3>Subtotal</h3></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in transactions" :key="item.book.id">
              <td>{{ item.book.title }}</td>
              <td>{{ item.qty }}</td>
              <td>IDR {{ item.book.price }}</td>
              <td>IDR {{ item.qty * item.book.price }}</td>
            </tr>
            <tr>
              <td colspan="3"><h3>Total</h3></td>
              <td><h3>IDR {{ getTotalPrice() }}</h3></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!transactions.length">
          <h1>There are no transactions in {{ month.text }} {{ year.text }}.</h1>
        </div>
      </div>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/create-report-page.js"></script>

<style lang="scss" scoped>
@import "~@blibli/blue-tokens/dist/blue-tokens";

.blu-dropdown { margin-bottom: 2rem; }

.book-list {
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    margin-bottom: 1rem;
    border-bottom: 1px solid $blu-gray;
  }

  td { padding-top: 2rem; }

  &__remove-btn { width: 1%; }
}
</style>
