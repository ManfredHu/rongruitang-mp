import { profile } from "@config/index";
import appJson from "../app.json";

// Page装饰器
export function WxPage(Constructor): void {
  const instance = new Constructor();

  const lifes = ["Load", "Show", "Ready", "Hide", "Unload"];
  const originMethods: Function[] = lifes
    .map((i) => "on" + i)
    .map((key) => instance[key]);

  instance.onLoad = function () {
    console.info(`[BasePage] onLoad ${instance.name}`);
    const method = originMethods[0];
    if (typeof method === "function") {
      method.apply(this, arguments);
    }
  };

  instance.onShow = function () {
    console.info(`[BasePage] onShow ${instance.name}`);
    const method = originMethods[1];
    if (typeof method === "function") {
      method.apply(this, arguments);
    }
  };

  instance.onReady = function () {
    console.info(`[BasePage] onReady ${instance.name}`);
    const method = originMethods[2];
    if (typeof method === "function") {
      method.apply(this, arguments);
    }
  };

  // 挂载基类BasePage和实例方法
  const proto = Object.getPrototypeOf(instance);
  const superProto = Object.getPrototypeOf(proto);
  // mount
  const allPropertyKey = [
    ...pp(superProto),
    ...pp(proto),
    ...pp(instance),
  ].filter((i) => i !== "constructor");

  const rstObj: WechatMiniprogram.Page.Options<
    WechatMiniprogram.Page.DataOption,
    WechatMiniprogram.Page.CustomOption
  > = {};
  allPropertyKey.forEach((item) => {
    if (!rstObj[item]) rstObj[item] = instance[item];
  });

  Page(rstObj);
}

function pp(o: any) {
  return Object.getOwnPropertyNames(o);
}

// 接口继承
export interface BasePage
  extends WechatMiniprogram.Page
    .InstanceMethods<WechatMiniprogram.Page.DataOption> {}

// class 实现，与上面接口重名，因class会自动创建接口（所以类可以继承）
export class BasePage
  implements
    WechatMiniprogram.Page.Options<
      WechatMiniprogram.Page.DataOption,
      WechatMiniprogram.Page.CustomOption
    >
{
  protected readonly name: string;
  getName() {
    return this.name;
  }

  onShareAppMessage() {
    return {
      title: profile.title,
      path: appJson.pages[0],
      imageUrl:
        "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/荣瑞堂5比4分享用.png",
    };
  }

  setTabBar(params: { selected: number }) {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData(params);
    } else {
      throw new Error("not getTabBar methods");
    }
  }
}
