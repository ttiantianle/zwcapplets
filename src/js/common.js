import wepy from 'wepy';
export default {
// const common = (param, datat, _this, obj = {} ) => {
  common (param, datat, _this, obj = {} ){

    let url = "https://zwcap.zhaowoce.com:4433";
    // new Promise(function(){
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
          // _this.territory = data;
          shuju = data;
          console.log(shuju);
          _this.$apply()
        }
      });
    return shuju
    // });
  }
// module.exports = {
//   common,
// };
}
