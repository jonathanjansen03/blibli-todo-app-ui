import AppFooter from "@/components/AppFooter.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppFooter,
    NavigationBar
  },
  computed: {
    ...mapGetters("book", ["books"])
  },
  methods: {
    ...mapActions("book", ["setBooks"]),
  },
  async beforeMount() {
    await this.setBooks();
  }
}
