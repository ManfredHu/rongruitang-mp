import { BasePage, WxPage } from "@base/BasePage";
import {
  profile,
  homeCards,
  HomeCard,
  homeLocation,
  phoneCall,
  doctorList,
  bannerImgs,
} from "@config/index";

@WxPage
export default class IndexPage extends BasePage {
  readonly name = "page/index/index"

  data = {
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse("button.open-type.getUserInfo"),

    bannerImgs,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,

    profileAvator: profile.avator,
    profileDesc: profile.desc,
    profileTitle: profile.title,
    homeCards,
    sessionForm: {}, // 客服私有
    doctorList,
  }

  onShow() {
    this.setTabBar({
      selected: 0
    })
  }

  onLoad() {
    
  // if (mpApp.globalData.userInfo) {
  //   this.setData({
  //     userInfo: mpApp.globalData.userInfo,
  //     hasUserInfo: true,
  //   });
  // } else if (this.data.canIUse) {
  //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //   // 所以此处加入 callback 以防止这种情况
  //   mpApp.userInfoReadyCallback = (res) => {
  //     this.setData({
  //       userInfo: res.userInfo,
  //       hasUserInfo: true,
  //     });
  //   };
  // } else {
  //   // 在没有 open-type=getUserInfo 版本的兼容处理
  //   wx.getUserInfo({
  //     success: (res) => {
  //       mpApp.globalData.userInfo = res.userInfo;
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true,
  //       });
  //     },
  //   });
  // }
  }

  infoHandleTap(e) {
    const type = e.currentTarget.dataset.type as HomeCard["type"];
    if (!type) console.error(e);
    if (type === "address") {
      this.onAddressTap();
    } else if (type === "phone") {
      this.onPhoneTap();
    } else {
      throw new Error(`infoHandleTap type not support ${type}`);
    }
  }
  onContact() {
    console.log(`联系客服`);
  }
  onAddressTap() {
    console.log(`homeLocation`, homeLocation);
    wx.openLocation(homeLocation);
  }
  onPhoneTap() {
    console.log(`phoneCall`, phoneCall);
    wx.makePhoneCall(phoneCall);
  }
}