import { BliPagination } from '@blibli/dls/dist/components/pagination'
import BookCard from '@/components/BookCard.vue'
import { mapActions, mapGetters } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'BuyBooksPage',
  components: {
    BliPagination,
    BookCard,
    SearchBar
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters('book', ['books', 'pagination', 'params']),
    searchInput() {
      return this.$refs.searchInput
    }
  },
  methods: {
    ...mapActions('book', ['getBookList', 'setParams']),
    initFocus() {
      this.searchInput.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  },
  watch: {
    async currentPage() {
      this.setParams({ page: this.currentPage })
      await this.getBookList(this.params)
      this.initFocus()
    }
  },
  async beforeMount() {
    this.setParams({ title: "", page: 1 })
    await this.getBookList(null)
  }
}
