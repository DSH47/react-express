// pages/14page/14page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:null,
    imgUrls: [
      'http://h.hiphotos.baidu.com/image/pic/item/2f738bd4b31c87018e9450642a7f9e2f0708ff16.jpg',
      'http://e.hiphotos.baidu.com/image/pic/item/83025aafa40f4bfb0f815ad60e4f78f0f63618db.jpg',
      'http://f.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f81eae7e5cda81cb38db3dee.jpg'
    ],
    width:null,
    height:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  chooseImage: function() {

    let that =this;
    wx.chooseImage({
      count: 1, // 默认9
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      success: function(res) {

        var tempFilePaths = res.tempFilePaths

        that.setData({
          tempFilePaths: tempFilePaths
        });
      }
    })
  },

  previewImage: function() {

    var imgUrls = this.data.imgUrls;
    wx.previewImage({
      current: imgUrls[0], // 当前显示图片的http链接
      urls: imgUrls// 需要预览的图片http链接列表
    })
  },


  getImageInfo: function() {
    let that = this;
    wx.chooseImage({
      success: function (res) {
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            that.setData({
              width: res.width,
              height: res.height
            });
            
      
            console.log(res)

          }
        })
      }
    })
  }
})