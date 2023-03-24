import BliIconClose from "@blibli/blue-icon/dist/icons/Close"

export default {
  name: "NavigationBar",
  components: {
    BliIconClose
  },
  methods: {
    toggleNavbar() {
      const navLinks = this.$refs.navLinks;

      if (navLinks.classList.contains("toggleable-navbar")) {
        navLinks.classList.remove("toggleable-navbar");
      } else {
        navLinks.classList.add("toggleable-navbar");
      }
    }
  }
};
