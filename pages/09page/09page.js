// pages/09page/09page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  phoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },

  locationMap: function() {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function(res) {
        wx.openLocation({ //​使用微信内置地图查看位置。
          latitude: 24.345765, //要去的纬度-地址
          longitude: 102.565315, //要去的经度-地址
          name: "吃饭的地方",
          address: '免费吃饭的地方'
        })
      }
    })
  },


  scanCode: function() {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  }
})