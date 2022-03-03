// import { createPage, BasePage } from "@base/BasePage";


// createPage({
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
//     // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     // @ts-ignore
//     wx.getUserProfile({
//       desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true,
//         });
//       },
//     });
//   },
//   onLoad() {
//     // if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true,
//       });
//     // }
//   },
// });


import { BasePage, WxPage } from "@/base/BasePage";
import { kfQrCode } from "@config/my";
import packageJson from "../../../../package.json";
@WxPage
export default class MyPage extends BasePage {
  readonly name = "page/my/index";

  data = { kfQrCode, myName: "游客", version: packageJson.version }

  onLoad() {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true,
    //   });
    // }
  }
  onShow() {
    this.setTabBar({
      selected: 2,
    });
  }
}