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
    ...mapGetters('cart', ['cartItems']),
    book() {
      return this.books.find(book => book.id === this.bookId)
    },
    stock() {
      if (!this.cartItems.length) {
        return this.book.stock
      }

      const item = this.cartItems.find(item => item.book.id === this.bookId)
      return item ? this.book.stock - item.qty : this.book.stock
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
    addToCartClick() {
      if (!this.qty) {
        alert('Please select quantity!')
        return
      }

      this.updateBook({ book: this.book, isOnlyUpdatingStock: true })
        .then(async () => {
          await this.addToCart({ book: this.book, qty: this.qty })
          this.qty = 0
          alert('Book added to cart!')
        })
        .catch(err => alert('An error has occurred. Please try again later.' + err))
    }
  }
}
