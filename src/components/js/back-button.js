import { BliButton } from '@blibli/dls/dist/components/button'

export default {
  name: 'BackButton',
  components: {
    BliButton
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
