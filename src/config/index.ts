const addressIcon = require("../image/icon_location.png");
const phoneIcon = require("../image/icon_phone.png");
const kfIcon = require("../image/icon_kf.png");

console.log(`addressIcon`, addressIcon);
export const profile = {
  title: "东莞市荣瑞堂中医诊所",
  desc: "营业时间 14:00 - 21:30",
  avator:
    "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/荣瑞堂256.png",
};

export type HomeCard = {
  type: "phone" | "address" | "kf";
  title?: string;
  desc?: string;
  titleCenter?: boolean;
  icon?: string;
};

export const homeCards: HomeCard[] = [
  {
    type: "address",
    title: "广东省东莞市虎门镇连升路93号",
    titleCenter: false,
    icon: addressIcon.default as string,
  },
  {
    type: "phone",
    title: "联系电话",
    titleCenter: true,
    icon: phoneIcon.default as string,
  },
  {
    type: "kf",
    title: "联系客服",
    titleCenter: true,
    icon: kfIcon.default as string,
  },
];

// https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html
// 调用 wx.openLocation 传的值
export const homeLocation = {
  latitude: 22.82403, // 纬度
  longitude: 113.68253, // 经度
  scale: 18,
  name: profile.title,
  address: homeCards[0].title,
  success() {},
  fail() {},
  complete() {}
};

// https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html
export const phoneCall = {
  phoneNumber: "13800138000",
  success() {},
  fail() {},
  complete() {},
};