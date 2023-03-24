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
  insertTransaction({ commit }, transactions) {
    transactions.forEach(transaction => {
      axios
        .post(api.insertTransactionAPI.api, transaction)
        .then(() => {
          commit("insertTransaction", transaction);
          alert("Your purchase is being processed and will be delivered soon!");
        })
        .catch(err => {
          alert("Error making transaction. Please try again later. " + err);
        });
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
