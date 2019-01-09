<template>
<div id="bottomBar">
    <div class="content-wrapper">
        <div>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
        <div>服务器赞助商为  ucloud ，存储赞助商为  七牛云存储 ，由  alinode 提供应用性能服务。</div>
        <div>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></div> 
    </div>
</div>
</template>

<script>

export default {
  name: 'bottomBar',
  
}
</script>

<style lang="scss" scoped>
#bottomBar{
    
    width:99vw;
    height:185px;
    background: #fff;
}
.content-wrapper{
    margin:18px 234px;
    margin-bottom:0;
    padding-top:30px;
    div{
        line-height:300%;
        color:gray;
        font-size:14px;
    }
}

</style>
