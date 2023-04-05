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
        title: 'Title must be 50 characters max.',
        author: 'Author must be 50 characters max.',
        stock: 'Stock must be between 1 and 100 (inclusive).',
        price: 'Price is in IDR and must be between 35000 and 1000000 (inclusive).',
        discount: 'Discount is in percentage and must be between 0 and 100 (inclusive).'
      },
      bookId: window.location.pathname.split('/')[3],
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
    isAllFieldFilled() {
      return this.book.title && this.book.author && this.book.stock && this.book.price
    },
    isValidStock() {
      return this.book.stock >= 1 && this.book.stock <= 100
    },
    isValidPrice() {
      return this.book.price >= 1000 && this.book.price <= 1000000
    },
    isValidDiscount() {
      return this.book.discount >= 0 && this.book.discount <= 100
    }
  },
  methods: {
    ...mapActions('book', ['updateBook']),
    isValidInputs() {
      if (!this.isAllFieldFilled) {
        alert('Please fill all the fields.')
        return false
      }

      if (!this.isValidStock) {
        alert('Stock should be between 1 and 100 (inclusive).')
        return false
      }

      if (!this.isValidPrice) {
        alert('Price should be between 1000 and 1000000 (inclusive).')
        return false
      }

      if (!this.isValidDiscount) {
        alert('Discount should be between 0 and 100 (inclusive).')
        return false
      }

      return true
    },
    async handleSubmit() {
      if (!this.isValidInputs()) {
        return
      }

      const updatedBook = {
        id: this.bookId,
        name: this.book.title,
        seller: {
          name: this.book.author
        },
        stock: this.book.stock,
        price: {
          final: this.book.price - (this.book.price * this.book.discount),
          old: this.book.price,
          discount: this.book.discount
        }
      }

      await this.updateBook({ book: updatedBook })
      alert('Book updated successfully!')
    }
  }
}
