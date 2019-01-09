<template>
  <div class="top-nav-bar">
    <div class="top-nav-logo">
      <img src="../assets/cnodejs_light.svg" alt="">
    </div>
    <div class="top-nav-menu">
      <ul>
        <li v-for='select in selects'>{{select}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNavBar',
  data () {
    return {
      selects:['首页','新手入门','API','关于','注册','登录']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  width: 120px;
  height:28.19px;
}
.top-nav-bar{
  width: 100%;
  height:50px;
  display: flex;
  background: #444;
  color:#ccc;
  justify-content: space-between;
}
.top-nav-logo{
  width: 160px;
  height:40px;
  margin:auto 240px;
  padding-top: 3px;
  align-items: center;
}
.top-nav-menu{
  align-items:center;
  margin:auto 242px;
}
ul{
  display: flex;
}
li{
  margin-left: 30px;
  font-size: 13px;
  white-space: nowrap;
}
</style>
