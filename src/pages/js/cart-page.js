import { BliButton } from "@blibli/dls/dist/components/button";
import { BliCard, BliCardContent } from "@blibli/dls/dist/components/card";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    BliButton,
    BliCard,
    BliCardContent
  },
  data() {
    return {
      tempCart: [
        {
          id: 1,
          name: "Harry Potter",
          price: 10000,
          qty: 2
        },
        {
          id: 2,
          name: "Twilight",
          price: 20000,
          qty: 2
        }
      ],
    }
  },
  computed: {
    ...mapGetters("cart", ["cartItems"]),
    isCartEmpty() {
      return this.cartItems.length === 0;
    }
  },
  methods: {
    ...mapActions("book", ["changeStock"]),
    ...mapActions("cart", ["removeFromCart"]),
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.book.price.final * item.qty);
      }, 0);
    },
    async removeItem(index) {
      await this.changeStock({id: this.cartItems[index].book.id, qty: this.cartItems[index].qty});
      await this.removeFromCart(index);
      alert("Book removed from cart.");
    }
  }
};
