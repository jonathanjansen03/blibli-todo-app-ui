import { BliButton } from "@blibli/dls/dist/components/button";
import { BliField, BliIconSearch, BliInput } from "@blibli/dls/dist/components";
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  components: {
    BliButton,
    BliField,
    BliIconSearch,
    BliInput
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    ...mapActions("book", ["setBooks"]),
    async handleSearch() {
      await this.setBooks(this.searchQuery);
    }
  }
};
