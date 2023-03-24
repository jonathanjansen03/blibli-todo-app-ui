import { BliButton } from "@blibli/dls/dist/components/button";
import { BliModal, BliModalBody, BliModalHeader } from "@blibli/dls/dist/components";
import BliIconPlus from "@blibli/blue-icon/dist/icons/Plus"
import BliIconMinus from "@blibli/blue-icon/dist/icons/Minus"
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardActionButtons",
  props: ["isBuyingBooks", "index"],
  components: {
    BliButton,
    BliModal,
    BliModalHeader,
    BliModalBody,
    BliIconPlus,
    BliIconMinus
  },
  data() {
    const t = this;
    return {
      bookQuantity: 0,
      visibleModal: false,
      customControls: [
        {
          label: "Cancel",
          handler() {
            t.visibleModal = false;
          },
          color: "secondary",
          outline: true
        },
        {
          label: "Delete Forever",
          handler() {
            t.deleteBook(t.index);
            t.visibleModal = false;
          },
          color: "primary",
          outline: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters("book", ["books"]),
    bookId() {
      return this.books[this.index].id;
    }
  },
  methods: {
    ...mapActions("book", ["deleteBook"])
  }
};
