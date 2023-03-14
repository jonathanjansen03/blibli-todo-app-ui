export default {
  name: "NavigationBar",
  methods: {
    toggleNavbar() {
      const navLinks = document.querySelector(".nav-links");

      if (navLinks.classList.contains("toggle-navbar")) {
        navLinks.classList.remove("toggle-navbar");
      } else {
        navLinks.classList.add("toggle-navbar");
      }
    }
  }
}
