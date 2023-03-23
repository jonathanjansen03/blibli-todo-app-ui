import { BliButton } from "@blibli/dls/dist/components/button";
import { BliCard, BliCardContent } from "@blibli/dls/dist/components/card";
import BliIconPlus from "@blibli/blue-icon/dist/icons/Plus"
import BliIconMinus from "@blibli/blue-icon/dist/icons/Minus"
import { BliField, BliInput, BliInputStepper } from "@blibli/dls/dist/components";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BookDetailPage",
  components: {
    BliButton,
    BliCard,
    BliCardContent,
    BliField,
    BliIconPlus,
    BliIconMinus,
    BliInput,
    BliInputStepper
  },
  data() {
    return {
      bookObj: {
        imageUrl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-11147207/dekoruma_dekoruma_full03.jpg",
        name: "Harry Potter",
        seller: { name: "J.K. Rowling" },
        price: { final: 100000 },
        stock: 15,
      },
      bookId: window.location.pathname.split("/")[2],
      qty: 0,
      min: 0
    };
  },
  computed: {
    ...mapGetters("book", ["books"]),
    book() {
      return this.books.find(book => book.id === this.bookId);
    },
    max(){
      return this.book.stock
    },
    minusBtnDisabled() {
      return this.qty <= this.min;
    },
    plusBtnDisabled() {
      return this.qty >= this.max;
    },
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("book", ["changeStock"]),
    minusClick() {
      this.minusBtnDisabled || (this.qty--);
    },
    plusClick() {
      this.plusBtnDisabled || (this.qty++);
    },
    blurInput() {
      this.qty >= this.max && (this.qty = this.max) ? this.qty < this.min && (this.qty = this.min) : this.isActive = false;
    },
    focusInput() {
      this.isActive = true;
    },
    async addToCartClick() {
      if (this.qty === 0) {
        alert("Please select quantity!");
        return;
      }
      await this.addToCart({ book: this.book, qty: this.qty});
      await this.changeStock({id: this.book.id, qty: -this.qty})
      this.qty = 0;
      alert("Book added to cart!");
    }
  }
};
