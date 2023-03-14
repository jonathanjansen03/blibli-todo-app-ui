import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  methods: {
    toggleNavbar() {
      const navLinks = document.querySelector(".nav-links");

      // if (navLinks.style.display !== "none") {
      //   navLinks.style.display = "none";
      // } else {
      //   navLinks.style.display = "block";
      // }

      if (navLinks.classList.contains("toggle-navbar")) {
        navLinks.classList.remove("toggle-navbar");
      } else {
        navLinks.classList.add("toggle-navbar");
      }
    }
  }
}
