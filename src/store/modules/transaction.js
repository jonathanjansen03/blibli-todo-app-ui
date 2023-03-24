import axios from "axios";
import { api } from "@/config";

const state = {
  transactions: []
};

const getters = {
  transactions(state) {
    return state.transactions;
  }
};

const mutations = {
  insertTransaction(state, transaction) {
    state.transactions.push(transaction);
  }
};

const actions = {
  insertTransaction(transactions) {
    transactions.forEach(transaction => {
      axios
        .post(api.insertTransactionAPI.api, transaction)
        .then(() => {
          alert("Your purchase is being processed and will be delivered soon!");
        })
        .catch(err => {
          alert("Error making transaction. Please try again later. " + err);
        });
    });
  },
  getTransactions({ commit }, { month, year }) {
    const url = api.getTransactionsReportAPI.api +
      api.getTransactionsReportAPI.params.month + month + "&" +
      api.getTransactionsReportAPI.params.year + year;

    console.log(url)
    axios
      .get(url)
      .then(res => {
        res.data.forEach(transaction => {
          commit("insertTransaction", transaction);
        });
      })
      .catch(err => {
        alert("Error while fetching transactions data. Please try again later. " + err);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
