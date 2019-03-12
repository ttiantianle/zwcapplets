import wepy from 'wepy';
export default {
  common (param, datat, _this, obj = {} ){
    let url = "https://zwcap.zhaowoce.com:4433";
    let shuju = [];
      wepy.request({
        url: url + param,
        method: "POST",
        data: obj,
        success(res){
          let str = res.data.substr(1);
          str = str.substr(0, str.length-1);
          let data = JSON.parse(str);
          console.log(datat);
          datat = data;
          shuju = data;
          console.log(shuju);
          _this.$apply()
        }
      });
    return shuju
  }
}
