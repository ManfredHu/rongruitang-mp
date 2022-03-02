//logs.js
import * as util from '../../utils/util'
import { createPage, BasePage } from "@base/BasePage";
createPage({
  data: {
    logs: [],
  },
  onShow() {
    (this as BasePage).setTabBar({
      selected: 1
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync("logs") || []).map((log) => {
        return util.formatTime(new Date(log));
      }),
    });
  },
});
