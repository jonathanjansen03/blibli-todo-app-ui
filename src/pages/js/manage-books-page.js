import { BliButton } from "@blibli/dls/dist/components/button";
import BookCard from "@/components/BookCard.vue";
import { mapActions, mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ManageProductsPage",
  components: {
    BliButton,
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
