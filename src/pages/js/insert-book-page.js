import { BliButton } from "@blibli/dls/dist/components/button";
import { BliCard, BliCardContent } from "@blibli/dls/dist/components/card";
import { BliField, BliInput } from "@blibli/dls/dist/components";
import axios from "axios";

export default {
  components: {
    BliButton,
    BliCard,
    BliCardContent,
    BliField,
    BliInput
  },
  name: "InsertBookPage",
  data() {
    return {
      type: null,
      number: null,
      disabled: null,
      helperMessage: {
        title: "Title must be 50 characters max.",
        author: "Author must be 50 characters max.",
        stock: "Stock must be between 1 and 100 (inclusive).",
        price: "Price is in IDR and must be between 1000 and 100000 (inclusive)."
      },
      title: "",
      author: "",
      stock: 0,
      price: 0,
    }
  },
  computed: {
    isAllFieldFilled() {
      return this.title && this.author && this.stock && this.price;
    },
    isValidStock() {
      return this.stock >= 1 && this.stock <= 100;
    },
    isValidPrice() {
      return this.price >= 1000 && this.price <= 100000;
    },
  },
  methods: {
    validateInputs() {
      if (!this.isAllFieldFilled) {
        alert("Please fill all the fields.");
        return false;
      }

      if (!this.isValidStock) {
        alert("Stock should be between 1 and 100 (inclusive).");
        return false;
      }

      if (!this.isValidPrice) {
        alert("Price should be between 1000 and 100000 (inclusive).");
        return false;
      }

      return true;
    },
    handleSubmit() {
      const isValidInputs = this.validateInputs();

      if (!isValidInputs) {
        return;
      }

      // console.log(this.title);
      // console.log(this.author);
      // console.log(this.stock);
      // console.log(this.price);
      axios.get("https://localhost:8080/gdn-bookstore-api/books")
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.message);
        })
    }
  }
}
