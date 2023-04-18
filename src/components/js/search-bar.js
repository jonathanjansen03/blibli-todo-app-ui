import { BliButton } from '@blibli/dls/dist/components/button'
import { BliField } from '@blibli/dls/dist/components/field'
import BliIconSearch from '@blibli/blue-icon/dist/icons/Search'
import { BliInput } from '@blibli/dls/dist/components/input'
import UpdateQuery from "@/mixins/update-query";

export default {
  mixins: [UpdateQuery],
  name: 'SearchBar',
  components: {
    BliButton,
    BliField,
    BliIconSearch,
    BliInput
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    async handleSearch() {
      this.updateQuery({ title: this.searchQuery, page: 1 })
    }
  }
}
