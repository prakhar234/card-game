import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.html()).toContain("<h1>Card Game</h1>");
  });

  it("has the correct styles", () => {
    const wrapper = mount(AppHeader);
    const header = wrapper.find("header");
    expect(header.classes()).toContain("app-header");
  });
});
