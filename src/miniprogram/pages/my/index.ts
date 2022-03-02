import { createPage, BasePage } from "@base/BasePage";

createPage({
  data: {},
  onShow() {
    (this as BasePage).setTabBar({
      selected: 2
    })
  },
  onLoad: () => {},
});
