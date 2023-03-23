import { BliButton } from "@blibli/dls/dist/components/button";
import { BliCard, BliCardContent } from "@blibli/dls/dist/components/card";
import { BliField, BliInput } from "@blibli/dls/dist/components";
import { mapActions } from "vuex";

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
      book: {
        title: "",
        author: "",
        stock: 0,
        price: 0,
      }
    };
  },
  computed: {
    isAllFieldFilled() {
      return this.book.title && this.book.author && this.book.stock && this.book.price;
    },
    isValidStock() {
      return this.book.stock >= 1 && this.book.stock <= 100;
    },
    isValidPrice() {
      return this.book.price >= 1000 && this.book.price <= 100000;
    },
  },
  methods: {
    ...mapActions("book", ["insertBook"]),
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
    reset() {
      this.book.title = "";
      this.book.author = "";
      this.book.stock = 0;
      this.book.price = 0;
    },
    async handleSubmit() {
      const isValidInputs = this.validateInputs();

      if (isValidInputs) {
        await this.insertBook(this.book);
        this.reset();
      }
    }
  }
};
