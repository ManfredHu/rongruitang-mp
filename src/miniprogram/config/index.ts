const addressIcon = require("../image/icon_location.png");
const phoneIcon = require("../image/icon_phone.png");
const kfIcon = require("../image/icon_kf.png");

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
    title: "广东省东莞市虎门镇连升路93号之十二102室",
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
  phoneNumber: "13316609357",
  success() {},
  fail() {},
  complete() {},
};

export const doctorList = [
  {
    name: "彭锐",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/彭锐512.jpg",
    title: "医学博士，副教授，副主任中医师",
    desc: `擅长xxxx`,
  },
  {
    name: "贾超",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/贾超512.jpg",
    title: "医学博士，主任中医师，硕士生导师",
    desc: `擅长xxxx`,
  },
  {
    name: "董秀兰",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/董秀兰512.jpg",
    title: "医学博士，硕士研究生导师",
    desc: `擅长xxxx`,
  },
  {
    name: "张顺荣",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/张顺荣512.jpg",
    title: "医学学士",
    desc: `擅长xxxx`,
  },
  {
    name: "刘杰凯",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/刘杰凯512.jpg",
    title: "针灸推拿科，主治中医师",
    desc: `擅长xxxx`,
  },
  {
    name: "张蕊",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/张蕊512.jpg",
    title: "医学硕士，医学博士在读",
    desc: `擅长xxxx`,
  },
  {
    name: "黄智强",
    avator:
      "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/512/黄智强512.jpg",
    title: "医师",
    desc: `擅长xxxx`,
  },
];

export const bannerImgs = [
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner2.jpg",
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner3.jpg",
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner1.jpg",
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner4.jpg",
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner5.jpg",
  "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/rongruitang_banner_output/banner6.jpg",
]