// pages/10page/10page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)) + 'rpx';

        that.setData({
          windowHeight: windowHeight
        });
      }
    })


  }
})