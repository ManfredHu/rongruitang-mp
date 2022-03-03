class APIRequest {
  constructor() {

  }

  wxLogin() {
    return new Promise(resolve => {
      wx.login({
        success(res) {
          const code = res.code
          if (code) {
            console.info(`login code`, code)
            resolve(code);
          } else {
            console.error(`login error: not code`, res)
          }
        },
        fail() {
          wx.showToast({
            title: "登录失败，请退出微信重试",
            icon: "none",
            duration: 3000,
            complete: () => {},
          });
          resolve(false)
        }
      })
    })
    
  }
}


