<template>
<div id="app">
    <topNavBar></topNavBar> 
    <router-view name='main'></router-view>
    <footer>
      <bottomBar />  
    </footer>
</div>
</template>

<script>
import topNavBar from './components/topNavBar'
import bottomBar from './components/bottomBar'
import sideBar from './components/sideBar'
export default {
  name: 'App',
  components:{topNavBar,bottomBar,sideBar}
}
</script>

<style lang="scss">
#app{
  width: 99vw;
  
  background: rgb(225,225,225);
  
}
*{margin:0;padding:0;box-sizing: border-box}
ul,ol{list-style:none}
a{text-decoration: none;color:inherit}
img{
  border-radius:2px;
}
</style>

