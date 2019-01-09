<template>
    <div class="content-wrapper">
 <div class="post-list">
    <div class="loading"></div>
    <div class="post-list-title">
        <ul class=all-menu>    
            <li class=top-menu-wrapper>
                <ul class=top-menu>
                    
                    <li class=active><a href="#">全部</a></li>
                    <li><a href="#">精华</a></li>
                    <li><a href="#">分享</a></li>
                    <li><a href="#">问答</a></li>
                    <li><a href="#">招聘</a></li>
                    <li><a href="#">客户端测试</a></li>
                </ul>
            </li>
            <li v-for='topic in topics'>
                <!-- avatar --> 
                <router-link :to="{name:'userInfo',params:{id:topic.author.loginname}}"><span class='avatar'><img :src='topic.author.avatar_url' alt=""></span></router-link>
                <!-- reply num -->
                <span class='reply'>{{topic.reply_count}}/</span>
                <!-- view num -->
                <span class='visit' >{{topic.visit_count}}</span>
                <!-- tab  -->
                <span :class='["tab",{good:topic.good},{top:topic.top}]'>{{topic|correctTab}}</span>
                <!-- title  -->
                <router-link :to="{ name: 'myArticle', params: { id: topic.id,name:topic.author.loginname }}">
                    <span class=mytitle>{{topic.title}}</span>
                </router-link>   
                <!-- time  -->
                <span class='lasttime'>{{topic.last_reply_at|formatTime}}</span>
            </li>
            <li class=select-bar>
                <selectBar v-on:handle='changePages'></selectBar>
            </li>
        </ul>
    </div>
  </div>
    </div>
 
</template>

<script>
import selectBar from './selectBar'
export default {
  name: 'postList',
  data () {
    return {
      topics:[],
      topMenu:['全部', '精华' ,'分享' ,'问答' ,'招聘' ,'客户端测试'],
      nowTab:'',
      topTab:'全部',
      nowPage:1
    }
  },
  components:{
    selectBar
  },
  methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',
            {
                params:{
                    page:this.nowPage,
                    limit:20
                }
            }
            ).then((res)=>{
                this.topics=res.data.data
            }).catch((err)=>{
                console.log(err)
            })
        },
        changePages(value){
            this.nowPage=value
            this.getData()
        },
        selectTab(){

        }
    },

    beforeMount(){
      this.getData()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-wrapper{
    width: 99%;
    padding-bottom:40px;
    padding-top:15px;
}
.post-list{
    width: calc(75% - 10px);
    margin:0 auto;
    border-radius: 5px;
    background: #fff;
}
.top-menu{
    display: flex;
   
    >li{
        margin-left:20px;
    }
    
}
.all-menu{
    
    >li{
        width:100%;
        height:50px;
        border-bottom: 1px solid rgb(225,225,225);
        line-height:50px; 
        
        span{
            display: inline-block;
            vertical-align: middle;
        }
        .mytitle:hover{
            text-decoration:underline;
            cursor: pointer;
        }
    }
    >li:not(.select-bar):hover{
        background: rgb(246,246,246);
    }
    .top-menu-wrapper{
        background: rgb(246,246,246);
        display: flex;
        align-items: center;
        height:40px;
        line-height:40px; 
        border-bottom:none;
        li{
            display: inline-block;
            color:#80bd01;
            font-size: 14px;
            line-height: 24px;
            height:24px;
            padding:0 4px;
        }
        li.active{
            color:white;
            
            border-radius: 2px;
            background: #80bd01;
        }
    }
}
img{
    width:30px;
    height:30px;
}
.avatar{
        display: inline-block;
        margin:10px;
        width:30px;
        height: 30px;
}
.reply{
    color:#9e78c0;
    font-size: 14px;
}
.visit{
    color:#b4b4b4;
    font-size: 10px;
}
.tab{
    display: inline-block;
    height:18px;
    width: 32px;
    font-size: 12px;
    border-radius:3px;
    color:#999;
    background: #e5e5e5;
    text-align: center;
    line-height: 18px;
}
.tab.good{
    background:#80bd01;
    color:white;
    
}
.tab.top{
    background:#80bd01;
    color:white;
}
.lasttime{
    float:right;
    padding-right:20px;
}
.select-bar{
    height:80px;
    
}

</style>
