import BackButton from '@/components/BackButton.vue'
import { BliButton } from '@blibli/dls/dist/components/button'
import { BliCard, BliCardContent } from '@blibli/dls/dist/components/card'
import { BliDropdown } from '@blibli/dls/dist/components/dropdown'
import { BliList, BliListItem } from '@blibli/dls/dist/components/list'
import { mapActions, mapGetters } from 'vuex'
import UpdateQuery from "@/mixins/update-query";

export default {
  mixins: [UpdateQuery],
  name: 'CreateReportPage',
  components: {
    BackButton,
    BliButton,
    BliCard,
    BliCardContent,
    BliDropdown,
    BliList,
    BliListItem,
  },
  data() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    return {
      months: monthNames.map((month, index) => {
        return {
          value: index + 1,
          text: month
        }
      }),
      years: [2020, 2021, 2022, 2023],
      month: {
        value: 1,
        text: 'January'
      },
      year: {
        value: 2020,
        text: 2020
      },
      isNotShowingResult: true
    }
  },
  computed: {
    ...mapGetters('transaction', ['transactions']),
    totalPrice() {
      return this.transactions.reduce((total, item) => {
        return total + (item.book.price * item.qty)
      }, 0)
    },
    query() {
      return this.$route.query
    }
  },
  methods: {
    ...mapActions('transaction', ['getTransactions']),
    createReport() {
      this.updateQuery({ month: this.month.value, year: this.year.value })
      this.isNotShowingResult = false
    }
  },
  watch: {
    async query() {
      await this.getTransactions(this.query)
    }
  }
}
