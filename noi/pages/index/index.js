// pages/09page/09page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    menus: ['整件酒水', '送礼专区', '节庆饰品', '新鲜水果']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  buttOnClick: function (e) {
    var id = e.currentTarget.dataset.xs;

    this.setData({
      select: id
    });
  }
})