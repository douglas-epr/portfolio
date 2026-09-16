interface ScrollCraftApi {
  mount(root: Element): void;
}

interface Window {
  ScrollCraft: ScrollCraftApi;
}
