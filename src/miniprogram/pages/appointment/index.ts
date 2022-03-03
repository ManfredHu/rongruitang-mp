import { BasePage, WxPage } from "@/base/BasePage";

@WxPage
export default class AppointmentPage extends BasePage {
  readonly name = "page/appointment/index";

  onShow() {
    this.setTabBar({
      selected: 1,
    });
  }
}