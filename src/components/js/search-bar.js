import { BliButton } from "@blibli/dls/dist/components/button";
import { BliField } from "@blibli/dls/dist/components/field";
import BliIconSearch from "@blibli/blue-icon/dist/icons/Search";
import { BliInput } from "@blibli/dls/dist/components/input";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchBar",
  components: {
    BliButton,
    BliField,
    BliIconSearch,
    BliInput,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapGetters("book", ["params"]),
  },
  methods: {
    ...mapActions("book", ["getBookList", "setParams"]),
    async handleSearch() {
      this.setParams({ title: this.searchQuery, page: 1 });
      await this.getBookList(this.params);
    },
  },
};
