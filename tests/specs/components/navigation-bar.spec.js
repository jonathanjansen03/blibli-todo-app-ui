import { describe, expect, it } from "vitest";
import VueRouter from "vue-router"
import { shallowMount, createLocalVue } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";

describe("NavigationBar.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  it("renders properly", () => {
    const wrapper = shallowMount(NavigationBar, { localVue });
    expect(wrapper.vm).toBeTruthy();
  });

  it("causes navLinks to toggle when toggleNavbar() function is called", async () => {
    const wrapper = shallowMount(NavigationBar, { localVue });
    const navLinks = wrapper.find(".nav-links");

    expect(navLinks.classes()).not.toContain("toggleable-navbar");

    await wrapper.vm.toggleNavbar();
    expect(navLinks.classes()).toContain("toggleable-navbar");

    await wrapper.vm.toggleNavbar();
    expect(navLinks.classes()).not.toContain("toggleable-navbar");
  });

  it("appears in large screens", () => {
    const wrapper = shallowMount(NavigationBar, { localVue });

    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));

    expect(wrapper.find(".toggle-navbar-btn").classes())
      .not.contain("toggleable-navbar");
  });

  it("appears and can be toggled on-click only in small screens", async () => {
    const wrapper = shallowMount(NavigationBar, { localVue });
    const toggleBtn = wrapper.find(".toggle-navbar-btn");
    const navLinks = wrapper.find(".nav-links");

    global.innerWidth = 768;
    global.dispatchEvent(new Event("resize"));

    await toggleBtn.trigger("click");
    expect(navLinks.classes()).toContain("toggleable-navbar");

    await toggleBtn.trigger("click");
    expect(navLinks.classes()).not.toContain("toggleable-navbar");
  });

  it("redirects to the correct pages when router-links are clicked", async () => {
    const router = new VueRouter({
      routes: [
        { path: "/", name: "home" },
        { path: "/buy-books", name: "buyBooks" },
        { path: "/manage-books", name: "manageBooks" },
        { path: "/about", name: "about" }
      ]
    });

    const wrapper = shallowMount(NavigationBar, {
      localVue,
      router
    });

    await wrapper.find("[to='/buy-books']").trigger("click");
    await wrapper.vm.$router.push("/buy-books");
    expect(wrapper.vm.$route.name).toBe("buyBooks");

    await wrapper.find("[to='/manage-books']").trigger("click");
    await wrapper.vm.$router.push("/manage-books");
    expect(wrapper.vm.$route.name).toBe("manageBooks");

    await wrapper.find("[to='/about']").trigger("click");
    await wrapper.vm.$router.push("/about");
    expect(wrapper.vm.$route.name).toBe("about");

    await wrapper.find("[to='/']").trigger("click");
    await wrapper.vm.$router.push("/");
    expect(wrapper.vm.$route.name).toBe("home");
  });
});
