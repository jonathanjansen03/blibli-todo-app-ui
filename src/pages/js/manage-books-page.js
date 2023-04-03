import { BliButton } from "@blibli/dls/dist/components/button";
import { BliPagination } from "@blibli/dls/dist/components/pagination";
import BookCard from "@/components/BookCard.vue";
import { mapActions, mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ManageProductsPage",
  components: {
    BliButton,
    BliPagination,
    BookCard,
    SearchBar
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters("book", ["books", "pagination", "params"]),
    searchInput() {
      return this.$refs.searchInput;
    }
  },
  methods: {
    ...mapActions("book", ["setBooks", "setParams"]),
    initFocus() {
      this.searchInput.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },
  watch: {
    async currentPage() {
      this.setParams({ page: this.currentPage });
      await this.setBooks(this.params);
      this.initFocus()
    }
  },
  async beforeMount() {
    this.setParams({ title: "", page: 1 });
    await this.setBooks(null);
  }
};
