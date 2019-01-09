import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http=axios
Vue.config.productionTip = false
//filters and functions
function translate(value){
  switch (value){
    case 'share' :
    return '分享'
    break
    case 'ask' :
    return '问答'
    break
    case 'top' :
    return '置顶'
    break
    case 'good' :
    return '精华'
    break
    case 'job' :
    return '招聘'
    break
    case 'test':
    return '客户端测试'
    break
  }
  
}
Vue.filter('changePicSize',function(value){
  var cArr = value.match(/[^\x00-\xff]/ig); 
  let imgArray=[]
  if(value){
    
  }
})
Vue.filter('correctTab', function (value) {
  if(value.top&&value.good){
    return '置顶'
  }else if(value.top===true){return '置顶'}
  else if(value.good===true){return '精华'}
  else{
    return translate(value.tab)
  }
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
Vue.filter('formatTime', function (value) {
  let lastTime=new Date(value).getTime()
  let timeobj =new Date()
  let nowTime=timeobj.getTime()
  let temp
  let diff=nowTime-lastTime
  if(diff/1000<=60){
    return `刚刚`
  }
  if(diff/1000<=3600&&diff/1000>60){
    temp=parseInt(diff/1000/60,10)
    return `${temp}分钟前`
  }
  if(diff/1000>3600&&diff/1000<=86400){
    temp=parseInt(diff/1000/3600,10)
    return `${temp}小时前`
  }
  if(diff/1000<=31536000&&diff/1000>86400){
    temp=parseInt(diff/1000/86400,10)
    return `${temp}天前`
  }
  if(diff/1000>31536000){
    temp=parseInt(diff/1000/31536000,10)
    return `${temp}年前`
  }
  
})
Vue.filter('subString',(value)=>{
  var cArr = value.match(/[^\x00-\xff]/ig);  
  var temp=value.length + (cArr == null ? 0 : cArr.length); 
if(value&&temp>18){
  return value.slice(0,18)+'...'
}else{
  return value
}
})













/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
