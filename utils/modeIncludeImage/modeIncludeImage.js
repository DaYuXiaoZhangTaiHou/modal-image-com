Component({
  properties: {
    // 这里定义了组件属性，属性值可以在组件使用时指定
    isHidden:{
      type:Boolean,
      value:false
    },
    title: {
      type: String,
      value: '提示',
    },
    desc: {
      type: String,
      value: '提示文本',
    },
    src: {
      type: String,
      value: '',
    },
    ok: {
      type: String,
      value: '确定',
    },
    cancel: {
      type: String,
      value: '取消',
    }
  },
  data: {
  },
  
  methods: {
    // 这里是一个自定义方法
    cancelHandle: function (e) {
      var name = e.currentTarget.dataset.name
      // console.log(e);
      var myEventDetail = {name:name};
      this.triggerEvent('tabCom', myEventDetail,{});
    },
    okHandle: function (e) {
      var name = e.currentTarget.dataset.name
      // console.log(e);
      var myEventDetail = { name: name };
      this.triggerEvent('tabCom', myEventDetail, {});
    },
  }
})