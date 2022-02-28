import type {
  GlobalData
} from '../app'

import appJson from "../app.json";
import themeJson from "../../demo.theme.json";

// 含webpack hash string 的引用对象
const icon_home = require("../image/icon_home.png"); 
const icon_home_HL = require("../image/icon_home_HL.png"); 
const icon_order = require("../image/icon_order.png"); 
const icon_order_HL = require("../image/icon_order_HL.png"); 
const icon_user = require("../image/icon_user.png"); 
const icon_user_HL = require("../image/icon_user_HL.png"); 


const list = [
  {
    iconPath: icon_home.default as string,
    selectedIconPath: icon_home_HL.default as string,
  },
  {
    iconPath: icon_order.default as string,
    selectedIconPath: icon_order_HL.default as string,
  },
  {
    iconPath: icon_user.default as string,
    selectedIconPath: icon_user_HL.default as string,
  },
];

type TabBarList = {
  pagePath?: string
  text?: string
  iconPath?: string
  selectedIconPath?: string
};

const tabBarList = appJson.tabBar.list.map((item, index) =>
  Object.assign(item, list[index])
) as TabBarList[];

const myApp = getApp();

Component({
  data: {
    selected: 0,
    color: themeJson[(myApp.globalData as GlobalData).theme],
    selectedColor: themeJson[(myApp.globalData as GlobalData).theme],
    list: tabBarList,
  },
  attached() {
  },
  methods: {
    switchTab(e: WechatMiniprogram.Event) {
      const data = e.currentTarget.dataset;
      const dataPath = data.path;
      const url = dataPath.startsWith("/") ? dataPath : `/${dataPath}`;
      wx.switchTab({ url });
      this.setData({
        selected: data.index,
      });
    },
  },
});