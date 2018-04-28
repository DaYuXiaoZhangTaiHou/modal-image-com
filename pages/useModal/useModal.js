// pages/useModal/useModal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   isHidden:false,
   src:'https://www.baidu.com/img/bd_logo1.png?qua=high',
   desc:'模态框提示内容'
  },
  buttonHandle:function(e){
   
    console.log(e.detail.name);
    if (e.detail.name=='cancel'){
      console.log('你点击的是取消按钮');
    }
    if (e.detail.name=='ok'){
      console.log('你点击的是确定按钮');
    }
    this.setData({
      isHidden: !this.data.isHidden
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //API自带的接口不能显示图片
    // var imageStr = "<image src='https://www.baidu.com/img/bd_logo1.png?qua=high'></image>";
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗' + imageStr,
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})