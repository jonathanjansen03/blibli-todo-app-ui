import { BliProduct, BliProductList } from "@blibli/dls/dist/add-ons/product"
import CardActionButtons from "@/components/CardActionButtons.vue";
import { mapGetters } from "vuex";

export default {
  props: ["isBuyingBooks"],
  name: "BookCard",
  components: {
    BliProduct,
    BliProductList,
    CardActionButtons
  },
  computed: {
    ...mapGetters("book", ["books"])
  },
  methods: {
    bliProductList() {
      return BliProductList;
    },
    bliProduct() {
      return BliProduct;
    },
    productClick() {
      console.log("Clicked", this.productInfo.name);
    }
  }
}
