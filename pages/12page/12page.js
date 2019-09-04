// pages/12page/12page.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  toNavigate: function () {
    wx.navigateTo({
      url: '../05page/05page',
    })
  },
  redirectTo:function(){
    wx.redirectTo({
      url: '../05page/05page',
    })
  },
  switchTab:function(){
    wx.switchTab({
      url: '../01page/01page'
    })
  }
})