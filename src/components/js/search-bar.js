import { BliButton } from "@blibli/dls/dist/components/button";
import { BliField } from "@blibli/dls/dist/components/field";
import BliIconSearch from "@blibli/blue-icon/dist/icons/Search"
import { BliInput } from "@blibli/dls/dist/components/input";
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
