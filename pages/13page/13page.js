const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var buffer = app.globalData.id;
    this.setData({
      id: buffer
    })
  },

  storage: function() {
    wx.setStorage({
      key: "key",
      data: "保存的数据"
    })
  },

  getStorag: function() {
    wx.getStorage({
      key: 'key',
      success: function(res) {
        console.log(res.data)
      }
    })
  },

  removeStorage: function() {
    wx.removeStorage({
      key: 'key',
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  clearStorage: function() {
    wx.clearStorage()
  }
})