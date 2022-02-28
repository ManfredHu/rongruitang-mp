import { createPage, BasePage } from "@base/BasePage";

//获取应用实例
let mpApp = getApp({})

createPage({
  name: "page/index/index",
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
  },
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: "/pages/appointment/index",
    });
  },
  onShow() {
    (this as BasePage).setTabBar({
      selected: 0
    })
  },
  onLoad: function () {
    if (mpApp.globalData.userInfo) {
      this.setData({
        userInfo: mpApp.globalData.userInfo,
        hasUserInfo: true,
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      mpApp.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          mpApp.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          });
        },
      });
    }
  },
  getUserInfo: function (e) {
    console.log(e);
    mpApp.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
