import { BliPagination } from '@blibli/dls/dist/components/pagination'
import BookCard from '@/components/BookCard.vue'
import { mapActions, mapGetters } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'
import UpdateQuery from '@/mixins/update-query'

export default {
  mixins: [UpdateQuery],
  name: 'BuyBooksPage',
  components: {
    BliPagination,
    BookCard,
    SearchBar
  },
  data() {
    return {
      currentPage: parseInt(this.$route.query['page']) || 1
    }
  },
  computed: {
    ...mapGetters('book', ['books', 'pagination']),
    searchInput() {
      return this.$refs.searchInput
    },
    query() {
      return this.$route.query
    }
  },
  methods: {
    ...mapActions('book', ['getBookList']),
    initFocus() {
      this.searchInput.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  },
  watch: {
    async currentPage() {
      this.updateQuery({ page: this.currentPage })
      this.initFocus()
    },
    async query() {
      await this.getBookList(this.query)
    }
  },
  async beforeMount() {
    await this.getBookList(null)
  }
}
