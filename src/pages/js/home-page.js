import { mapGetters, mapActions } from 'vuex'
import ApiCall from '@/components/ApiCall.vue'

export default {
  name: 'HomePage',
  components: {
    ApiCall
  },
  mounted () {
    this.counter = this.getCounter
  },
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    ...mapGetters('counter', ['getCounter'])
  },
  methods: {
    ...mapActions('counter', ['setCounter']),
    setCount () {
      this.setCounter(this.counter+=1)
      this.counter = this.getCounter
    }
  }
}
