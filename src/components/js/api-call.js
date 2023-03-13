import { mapGetters, mapActions } from 'vuex'
import { BliButton } from '@blibli/dls/dist/components/button'

export default {
  name: 'ApiCall',
  components: {
    BliButton
  },
  computed: {
    ...mapGetters('apiStore', ['text', 'postText', 'texts'])
  },
  methods: {
    ...mapActions('apiStore', ['getTextData', 'postTextData']),
    getTextAPI() {
      this.getTextData({ query: { queryTest: ['TEST-123', 'TEST-345']}})
    },
    async postTextAPI() {
      const test = {
        id: 'Test123',
        data: {
          text: "Doing some Test",
          list: [
            'this is data1',
            'this is data2',
            'this is data3'
          ]
        }
      }

      await this.postTextData(test)
      console.log(this.texts)
    }
  }
}