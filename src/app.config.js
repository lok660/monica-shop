export default {
  pages: [
    'pages/index/index'
  ],
  tabBar: {
    color: "#C0C4CC",
    selectedColor: "#fa436a",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index",
        iconPath: "static/tab-home.png",
        selectedIconPath: "static/tab-home-rf.png",
        text: "首页"
      },
      {
        pagePath: "pages/category/category",
        iconPath: "static/tab-cate.png",
        selectedIconPath: "static/tab-cate-rf.png",
        text: "分类"
      },
      {
        pagePath: "pages/notify/notify",
        iconPath: "static/tab-notify.png",
        selectedIconPath: "static/tab-notify-rf.png",
        tex: "消息"
      },
      {
        pagePath: "pages/cart/cart",
        iconPath: "static/tab-cart.png",
        selectedIconPath: "static/tab-cart-rf.png",
        text: "购物车"
      },
      {
        pagePath: "pages/profile/profile",
        iconPath: "static/tab-my.png",
        selectedIconPath: "static/tab-my-rf.png",
        text: "我的"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
