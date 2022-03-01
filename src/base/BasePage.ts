import Base from './Base'
import {profile} from '@config/index'
import appJson from '../app.json'
interface IndexData {
  selected: number;
}
interface IndexMethod {
  getTabBar(): WechatMiniprogram.Component.TrivialInstance;
}

type BasePageParams = WechatMiniprogram.Page.Options<
  Record<string, any>,
  Record<string, any>
> & {
  setTabBar?: (params: IndexData) => void;
};

export class BasePage extends Base {
  pageParams: BasePageParams = null;

  constructor(params: BasePageParams) {
    super(params);
    this.pageParams = params;
    this._attachMethods();
    Page(this.pageParams);
  }

  _attachMethods() {
    this.pageParams.setTabBar = this.setTabBar;

    // 分享兜底
    if (!this.pageParams.onShareAppMessage) {
      this.pageParams.onShareAppMessage = this.onShareAppMessage;
    }
  }

  setTabBar(params: IndexData) {
    const that = this as unknown as WechatMiniprogram.Page.Instance<
      IndexData,
      IndexMethod
    >;
    if (typeof that.getTabBar === "function" && that.getTabBar()) {
      that.getTabBar().setData(params);
    } else {
      throw new Error("not getTabBar methods");
    }
  }

  onShareAppMessage() {
    return {
      title: profile.title,
      path: appJson.pages[0],
      imageUrl:
        "https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/uPic/荣瑞堂5比4分享用.png",
    };
  }
}

export function createPage(params: BasePageParams) {
  return new BasePage(params);
}