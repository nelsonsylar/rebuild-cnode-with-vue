<template>
    <div class="content-wrapper">
        <div class="author-info">
            <div class="author-info-header"><span>主页 /</span></div>
            <div class="author-info-ul">
                <div class="author-info-title"><span class=author-avatar><img :src="userData.avatar_url" alt="" style='width:40px;height:40px;'></span><span class=author-name>{{userData.loginname}}</span></div>
                
                    
                    <div class="author-li">{{userData.score}}积分</div>
                
            </div>
            <div class="author-info-reg">注册于{{userData.create_at|formatTime}}</div>
        </div>
        <div class="recent-topics">
            <div class="recent-topics-header">最近创建的话题</div>
             <div class="recent-topics-ul">
                <ul>
                    <li v-for="(data,index) in userData.recent_topics" v-show='index<5'>
                        <router-link :to="{name:'myArticle',params:{id:data.id}}"> <span>{{data.title}}</span>  </router-link>
                        <span class=enable-right>{{data.last_reply_at|formatTime}}</span>
                    </li>
                    <li class=last-li>查看更多>></li>
                </ul>
            </div>
        </div>
        <div class="recent-replies">
             <div class="recent-replies-header">最近参与的话题
</div>
             <div class="recent-replies-ul">
                <ul>
                    <li v-for="(data,index) in userData.recent_replies" v-show='index<5'>
                        <router-link :to="{name:'myArticle',params:{id:data.id}}"> <span>{{data.title}}</span> </router-link>  
                        <span class=enable-right>{{data.last_reply_at|formatTime}}</span>
                    </li>
                    <li class=last-li>查看更多>></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'userInfo',
    data(){
        return {
            userData:[]
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.id}`)
            .then((res)=>{
                this.userData=res.data.data
                console.log(res.data.data)
            })
            .catch((err=>{
                console.log(err)
            }))    
        }
    },
    beforeMount(){
        this.getData()
        
    }
}
</script>
<style lang="scss" scoped>
.content-wrapper{
   width:1100px;
   margin:15px auto;
   margin-left:230px;
   border-radius:3px;
   color:#778087
}
.author-info,.recent-topics,.recent-replies{
    background: white;
    border-radius: 3px;
    margin-bottom: 12px;
    
}
.author-info-header,.recent-topics-header,.recent-replies-header{
    background: rgb(246,246,246);
    height:40px;
    padding:10px;
    border-bottom:1px solid #e5e5e5;
    border-radius:3px 3px 0 0;
    font-size:14px;
}
.author-info-ul,.recent-topics-ul,.recent-replies-ul{
    padding:10px;
    .author-name{
        display: inline-block;
        vertical-align: top;
        padding-top:6px;
        padding-left:6px;
        font-size:14px;   
    }
    li{
        border-bottom:1px solid #e5e5e5;
        margin-left:-10px;
        margin-right:-10px;
        padding:10px;
        .enable-right{
            float: right;
            font-size:14px;
        }
    }
    .last-li{
        border:none;
        padding-bottom: 0;
    }
}
.author-info-reg{
        padding-left:10px;
        padding-bottom:10px;
        font-size: 14px;
    }
.author-info-header{
    color:#80bd01;
}
</style>
