import { BliButton } from '@blibli/dls/dist/components/button'
import { BliCard, BliCardContent } from '@blibli/dls/dist/components/card'
import CartItem from "@/components/CartItem.vue";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  components: {
    BliButton,
    BliCard,
    BliCardContent,
    CartItem
  },
  computed: {
    ...mapGetters('cart', ['cartItems']),
    isCartEmpty() {
      return !this.cartItems.length
    }
  },
  methods: {
    ...mapActions('book', ['updateBook']),
    ...mapActions('cart', ['removeFromCart', 'emptyCart']),
    ...mapActions('transaction', ['insertTransaction']),
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.book.price.final * item.qty)
      }, 0)
    },
    async removeItem(index) {
      this.cartItems[index].book.stock += this.cartItems[index].qty
      await this.updateBook({ book: this.cartItems[index].book, isOnlyUpdatingStock: true })
      await this.removeFromCart(index)
      alert('Book removed from cart.')
    },
    async checkout() {
      const transactions = this.cartItems.map(item => {
        return {
          bookId: item.book.id,
          qty: item.qty
        }
      })
      await this.insertTransaction(transactions)
      this.emptyCart()
    }
  }
}
