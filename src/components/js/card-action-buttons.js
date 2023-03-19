import { BliButton } from "@blibli/dls/dist/components/button";
import { BliModal, BliModalBody, BliModalHeader } from "@blibli/dls/dist/components";
import BliIconPlus from "@blibli/blue-icon/dist/icons/Plus"
import BliIconMinus from "@blibli/blue-icon/dist/icons/Minus"

export default {
  props: ["isBuyingBooks"],
  name: "CardActionButtons",
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
      visibleModal: false,
      customControls: [
        {
          label: "Cancel",
          handler() {
            console.log(t.visibleModal);
            t.visibleModal = false;
            console.log(t)
            console.log(this);
          },
          color: "secondary",
          outline: true
        },
        {
          label: "Delete Forever",
          handler() {
            alert("Book deleted successfully!");
            t.visibleModal = false;
          },
          color: "primary",
          outline: false
        }
      ]
    }
  }
};
