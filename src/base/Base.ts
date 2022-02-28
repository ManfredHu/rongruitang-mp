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

  getName() {
    return this.#name
  }
}

export default Base