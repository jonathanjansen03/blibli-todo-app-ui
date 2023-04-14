import BackButton from '@/components/BackButton.vue'
import { BliButton } from '@blibli/dls/dist/components/button'
import { BliCard, BliCardContent } from '@blibli/dls/dist/components/card'
import { BliField } from '@blibli/dls/dist/components/field'
import { BliInput } from '@blibli/dls/dist/components/input'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UpdateBookPage',
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
        discount: 'Discount must be between 0% and 100% (inclusive).'
      },
      bookId: window.location.pathname.split('/')[3],
      errors: {}
    }
  },
  computed: {
    ...mapGetters('book', ['books']),
    bookIndex() {
      return this.books.findIndex(b => b.id === this.bookId)
    },
    book() {
      const book = this.books[this.bookIndex]

      return {
        title: book.name,
        author: book.seller.list,
        stock: book.stock,
        price: book.price.old ?? book.price.final,
        discount: book.price.discount
      }
    },
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
    isValidDiscount() {
      return !Object.prototype.hasOwnProperty.call(this.errors, 'discount')
    }
  },
  methods: {
    ...mapActions('book', ['updateBook']),
    async handleSubmit() {
      const updatedBook = {
        id: this.bookId,
        name: this.book.title,
        seller: {
          name: this.book.author
        },
        stock: this.book.stock === '' ? -1 : this.book.stock,
        price: {
          final: this.book.price - (this.book.price * this.book.discount),
          old: this.book.price,
          discount: this.book.discount === '' ? -1 : this.book.discount
        }
      }
      const res = await this.updateBook({ book: updatedBook })

      if (res.status === 200) {
        await this.$router.push('/books/manage')
        alert('Book updated successfully!')
      } else {
        this.errors = res.data
      }
    }
  }
}
