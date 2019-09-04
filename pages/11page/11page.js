// pages/11page/11page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var API_URL = 'http://localhost:8888/coming_soon';
    wx.request({

      url: API_URL,
      data: {},
      header: { "Content-Type": "json" }
      ,
      success: function (res) {
        console.log(res.data)
      }
    });
  }
})