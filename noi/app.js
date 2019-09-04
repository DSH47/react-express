//app.js
App({
  onLaunch: function () {
    this.globalData.id = "51"
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})