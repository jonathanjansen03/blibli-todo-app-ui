import { BliButton } from "@blibli/dls/dist/components/button";

export default {
  name: "BackButton",
  props: {
    path: {
      type: String,
      required: true
    },
    clickHandler: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    BliButton
  }
};
