export default {
  name: "NavigationBar",
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
}
