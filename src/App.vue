<template>
<div id="app">
    <topNavBar></topNavBar> 
    <router-view name='side'></router-view>
    <router-view name='main'></router-view>
    
    <footer>
      <bottomBar />  
    </footer>
</div>
</template>

<script>
import topNavBar from './components/topNavBar'
import bottomBar from './components/bottomBar'

export default {
  name: 'App',
  components:{topNavBar,bottomBar}
}
</script>

<style lang="scss">
#app{
  width: 99vw;
  min-height:95vh;
  background: rgb(225,225,225);
  position: relative;
}
footer{
  position:absolute;
  bottom:-185px;
}
*{margin:0;padding:0;box-sizing: border-box}
ul,ol{list-style:none}
a{text-decoration: none;color:inherit}
img{
  border-radius:2px;
}
</style>

