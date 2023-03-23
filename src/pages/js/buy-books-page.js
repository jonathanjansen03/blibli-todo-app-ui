import BookCard from "@/components/BookCard.vue";
import { mapActions, mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "BuyBooksPage",
  components: {
    BookCard,
    SearchBar
  },
  computed: {
    ...mapGetters("book", ["books"])
  },
  methods: {
    ...mapActions("book", ["setBooks"])
  },
  async beforeMount() {
    if (this.books.length ===0) {
      await this.setBooks("");
    }
  }
};
