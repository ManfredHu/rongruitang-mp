import Base from './Base'

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
}

export function createPage(params: BasePageParams) {
  return new BasePage(params);
}