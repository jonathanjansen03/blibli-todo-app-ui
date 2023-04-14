import BackButton from '@/components/BackButton.vue'
import { BliButton } from '@blibli/dls/dist/components/button'
import { BliCard, BliCardContent } from '@blibli/dls/dist/components/card'
import { BliField } from '@blibli/dls/dist/components/field'
import BliIconPlus from '@blibli/blue-icon/dist/icons/Plus'
import BliIconMinus from '@blibli/blue-icon/dist/icons/Minus'
import { BliInput } from '@blibli/dls/dist/components/input'
import { BliInputStepper } from '@blibli/dls/dist/components/input-stepper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BookDetailPage',
  components: {
    BackButton,
    BliButton,
    BliCard,
    BliCardContent,
    BliField,
    BliIconPlus,
    BliIconMinus,
    BliInput,
    BliInputStepper
  },
  data() {
    return {
      bookId: window.location.pathname.split('/')[2],
      qty: 0,
      min: 0
    }
  },
  computed: {
    ...mapGetters('book', ['books']),
    book() {
      return this.books.find(book => book.id === this.bookId)
    },
    max() {
      return this.book.stock
    },
    minusBtnDisabled() {
      return this.qty <= this.min
    },
    plusBtnDisabled() {
      return this.qty >= this.max
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('book', ['updateBook']),
    minusClick() {
      this.minusBtnDisabled || (this.qty--)
    },
    plusClick() {
      this.plusBtnDisabled || (this.qty++)
    },
    blurInput() {
      this.qty >= this.max && (this.qty = this.max) ?
        this.qty < this.min && (this.qty = this.min) : this.isActive = false
    },
    focusInput() {
      this.isActive = true
    },
    async addToCartClick() {
      if (!this.qty) {
        alert('Please select quantity!')
        return
      }

      this.book.stock -= this.qty
      this.updateBook({ book: this.book, isOnlyUpdatingStock: true })
        .then(() => {
          this.addToCart({ book: this.book, qty: this.qty })
          this.qty = 0
          alert('Book added to cart!')
        })
        .catch(err => alert('An error has occurred. Please try again later.' + err))
    }
  }
}
