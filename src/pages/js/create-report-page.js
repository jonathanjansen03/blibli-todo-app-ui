import { BliButton } from "@blibli/dls/dist/components/button";
import { BliCard, BliCardContent } from "@blibli/dls/dist/components/card";
import { BliDropdown } from "@blibli/dls/dist/components/dropdown"
import { BliList, BliListItem } from '@blibli/dls/dist/components/list'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateReportPage",
  components: {
    BliButton,
    BliCard,
    BliCardContent,
    BliDropdown,
    BliList,
    BliListItem,
  },
  data() {
    return {
      months: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      years: [2020, 2021, 2022, 2023],
      month: {
        value: "January",
        text: "January"
      },
      year: {
        value: 2020,
        text: 2020
      },
      isNotShowingResult: true,
      isFound: false,
      tempTransactions: [
        {
          id: 1,
          book: {
            id: 1,
            name: "Harry Potter",
            price: { final: 20000 }
          },
          qty: 3
        },
        {
          id: 2,
          book: {
            id: 2,
            name: "Twilight",
            price: { final: 10000 }
          },
          qty: 5
        }
      ]
    };
  },
  computed: {
    ...mapGetters("transaction", ["transactions"])
  },
  methods: {
    ...mapActions("transaction", ["getTransactions"]),
    async createReport() {
      await this.getTransactions({ month: this.month.value, year: this.year.value });
      this.isNotShowingResult = false;
      this.isFound = this.transactions.length >= 0;
      console.log("transactions", this.transactions, this.transactions.length);
    },
    getTotalPrice() {
      return this.tempTransactions.reduce((total, item) => {
        return total + (item.book.price.final * item.qty);
      }, 0);
    }
  }
};
