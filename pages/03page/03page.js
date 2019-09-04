// pages/03page/03page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://h.hiphotos.baidu.com/image/pic/item/2f738bd4b31c87018e9450642a7f9e2f0708ff16.jpg',
      'http://e.hiphotos.baidu.com/image/pic/item/83025aafa40f4bfb0f815ad60e4f78f0f63618db.jpg',
      'http://f.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f81eae7e5cda81cb38db3dee.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showloading:function(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showModal:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})