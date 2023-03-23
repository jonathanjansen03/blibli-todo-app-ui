import BookCard from "@/components/BookCard.vue";
import { mapActions } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "BuyBooksPage",
  components: {
    BookCard,
    SearchBar
  },
  methods: {
    ...mapActions("book", ["setBooks"])
  },
  async beforeMount() {
    await this.setBooks("");
  }
};
