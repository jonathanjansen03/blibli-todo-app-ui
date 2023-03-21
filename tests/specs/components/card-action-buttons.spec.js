import { describe, expect, it } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import CardActionButtons from "@/components/CardActionButtons.vue";

describe("CardActionButtons.vue", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(CardActionButtons);
    expect(wrapper.vm).toBeTruthy();
  });

  it("increments book quantity when incrementBookQuantity() is called", () => {
    const wrapper = shallowMount(CardActionButtons);

    expect(wrapper.vm.bookQuantity).toBe(0);

    wrapper.vm.incrementBookQuantity();
    expect(wrapper.vm.bookQuantity).toBe(1);
  });

  it("decrements book quantity when decrementBookQuantity() is called", () => {
    const wrapper = shallowMount(CardActionButtons);

    expect(wrapper.vm.bookQuantity).toBe(0);

    wrapper.vm.decrementBookQuantity();
    expect(wrapper.vm.bookQuantity).toBe(0);

    wrapper.vm.incrementBookQuantity();
    expect(wrapper.vm.bookQuantity).toBe(1);

    wrapper.vm.decrementBookQuantity();
    expect(wrapper.vm.bookQuantity).toBe(0);
  });

  it("opens modal when Delete button is clicked", async () => {
    const wrapper = mount(CardActionButtons);
    const deleteBtn = wrapper.find(".modal__delete-btn");

    expect(wrapper.vm.visibleModal).toBe(false);

    deleteBtn.vm.$emit("click");
    expect(wrapper.vm.visibleModal).toBe(true);
  });
});
