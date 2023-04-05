import { BliProduct, BliProductList } from '@blibli/dls/dist/add-ons/product'
import CardActionButtons from '@/components/CardActionButtons.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'BookCard',
  props: ['isBuyingBooks'],
  components: {
    BliProduct,
    BliProductList,
    CardActionButtons
  },
  computed: {
    ...mapGetters('book', ['books']),
    isEmpty() {
      return !this.books.length
    }
  },
  methods: {
    bliProductList() {
      return BliProductList
    },
    bliProduct() {
      return BliProduct
    }
  }
}
