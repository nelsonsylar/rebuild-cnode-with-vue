<template>
    <div class="content-wrapper">
 <div class="post-list">
    <div class="loading"></div>
    <div class="post-list-title">
        <ul class=all-menu>    
            <li class=top-menu-wrapper>
                <ul class=top-menu>
                    <li class=active>全部</li>
                    <li>精华</li>
                    <li>分享</li>
                    <li>问答</li>
                    <li>招聘</li>
                    <li>客户端测试</li>
                </ul>
            </li>
            <li class='titles' v-for='topic in topics'>
                <!-- avatar -->
                <span class='avatar'><img :src='topic.author.avatar_url' alt=""></span>
                <!-- reply num -->
                <span class='reply'>{{topic.reply_count}}/</span>
                <!-- view num -->
                <span class='visit' >{{topic.visit_count}}</span>
                <!-- tab  -->
                <span :class='["tab",{good:topic.good},{top:topic.top}]'>{{topic|correctTab}}</span>
                <!-- title  -->
                <router-link :to="{ name: 'myArticle', params: { id: topic.id }}">
                    <span class=mytitle>{{topic.title}}</span>
                </router-link>   
                <!-- time  -->
                <span class='lasttime'>{{topic.last_reply_at|formatTime}}</span>
            </li>
        </ul>
    </div>
  </div>
    </div>
 
</template>

<script>
export default {
  name: 'postList',
  data () {
    return {
      topics:[],
      topMenu:['全部', '精华' ,'分享' ,'问答' ,'招聘' ,'客户端测试'],
      nowTab:'',
      topTab:'全部'
    }
  },
  methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',
            {
                params:{
                    page:1,
                    limit:20
                }
            }
            ).then((res)=>{
                this.topics=res.data.data
            }).catch((err)=>{
                console.log(err)
            })
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
    background: rgb(225,225,225);
    
    padding-top:15px;
}
.post-list{
    width:1400px;
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
    >li:hover{
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
</style>
