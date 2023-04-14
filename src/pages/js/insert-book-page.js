import BackButton from '@/components/BackButton.vue'
import { BliButton } from '@blibli/dls/dist/components/button'
import { BliCard, BliCardContent } from '@blibli/dls/dist/components/card'
import { BliField } from '@blibli/dls/dist/components/field'
import { BliInput } from '@blibli/dls/dist/components/input'
import { mapActions } from 'vuex'

export default {
  name: 'InsertBookPage',
  components: {
    BackButton,
    BliButton,
    BliCard,
    BliCardContent,
    BliField,
    BliInput
  },
  data() {
    return {
      helperMessage: {
        title: 'Title must not be more than 100 characters.',
        author: 'Author must not be more than 100 characters.',
        stock: 'Stock must be between 1 and 100 (inclusive).',
        price: 'Price must be between IDR 1000 and IDR 1000000 (inclusive).',
      },
      book: {
        title: '',
        author: '',
        stock: 0,
        price: 0,
      },
      errors: {}
    }
  },
  computed: {
    isValidTitle() {
      return !Object.prototype.hasOwnProperty.call(this.errors, 'title')
    },
    isValidAuthor() {
      return !Object.prototype.hasOwnProperty.call(this.errors, 'author')
    },
    isValidStock() {
      return !Object.prototype.hasOwnProperty.call(this.errors, 'stock')
    },
    isValidPrice() {
      return !Object.prototype.hasOwnProperty.call(this.errors, 'price')
    },
  },
  methods: {
    ...mapActions('book', ['insertBook']),
    reset() {
      this.book.title = ''
      this.book.author = ''
      this.book.stock = 0
      this.book.price = 0
      this.errors = {}
    },
    async handleSubmit() {
      const res = await this.insertBook(this.book)

      if (res.status === 200) {
        this.reset()
        alert('Book added successfully!')
      } else {
        this.errors = res.data
      }
    }
  }
}
