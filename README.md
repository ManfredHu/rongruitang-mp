# rongruitang-mp
荣瑞堂中医诊所小程序

base [mpflow](https://wechat-miniprogram.github.io/mpflow/docs/configurations.html#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

## 实现细节

### base基类
实现方式基本是改构造函数，然后透传参数到小程序的Page，Components构造函数，方便后续加一些公共上报和公共方法等
具体可以看`src/base`下几个

### darkmode(@todo)
app.json配置`"darkmode": true,`后配合样式使用，js获取darkmode模式标识可用`wx.getSystemInfoSync().theme`，有'light'和'dark'两种取值

```CSS
/* LightMode 下的样式 start */
  
/* LightMode 下的样式 end */
@media (prefers-color-scheme: dark) {
  /* DarkMode 下的样式 start */
  
  /* DarkMode 下的样式 end */
}
```

### 地址导航
某个地址，可以点击按钮后拉起微信导航页，然后用微信或者第三方导航软件导航过去。因地址已录入高德地图，可以在[这里](https://lbs.amap.com/tools/picker)查询后拿到坐标结果，如`113.682537,22.824031`，然后通过API调起就行