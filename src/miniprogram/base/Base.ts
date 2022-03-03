class Base {
  app = getApp();
  #name: string
  constructor(
    params: WechatMiniprogram.Page.Options<
      Record<string, any>,
      Record<string, any>
    >
  ) {
    this.#name = params.name || Math.random().toString(36).substring(2)
  }

  getSelfName() {
    return this.#name
  }

  setData(data, callback) {
    this.setData(data, callback)
  }

  // 基类的公共方法
  methods() {
    return {
      $getSelfName: this.getSelfName,
      $setData: this.setData,
    }
  }
}

export default Base