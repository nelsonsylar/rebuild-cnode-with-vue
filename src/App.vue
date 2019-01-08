<template>
<div id="app">
    <topNavBar></topNavBar> 
    <router-view></router-view>
</div>
</template>

<script>
import topNavBar from './components/topNavBar'
export default {
  name: 'App',
  components:{topNavBar}
}
</script>

<style lang="scss">
#app{
  width: 100vw;
  height:100vh;
}
*{margin:0;padding:0;box-sizing: border-box}
ul,ol{list-style:none}
a{text-decoration: none;}

</style>

