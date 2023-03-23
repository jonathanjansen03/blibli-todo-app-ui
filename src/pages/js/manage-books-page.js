import { BliButton } from "@blibli/dls/dist/components/button";
import BookCard from "@/components/BookCard.vue";
import { mapActions } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ManageProductsPage",
  components: {
    BliButton,
    BookCard,
    SearchBar
  },
  methods: {
    ...mapActions("book", ["setBooks"])
  },
  async beforeMount() {
    await this.setBooks();
  }
};
