<template class=clearfix>
    <div class="content-wrapper">
        <div class="author-info">
            <div class="header">作者</div>
            <div class=avatarAndName>
                <router-link :to="{name:'userInfo',params:{id:authorData.loginname}}">
                    <div class=aAndi><span><img :src="authorData.avatar_url" alt="" style='width:30px;height:30px'></span>
                    <span>{{authorData.loginname}}</span></div>
                </router-link>
                
                <div style='margin-left:10px;'>积分:{{authorData.score}}</div>
            </div>
        </div>
        <div class="author-topics">
            <div class="header">作者其它话题</div>
            <ul>
                <li v-for="(data,index) in authorData.recent_topics" v-if='index<5'>
                    <router-link :to="{name:'myArticle',params:{id:data.id,name:data.author.loginname}}">
                        {{data.title|subString}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="author-replies">
            <div class="header">作者其它回复</div>
            <ul>    
                <li v-for="(data,index) in authorData.recent_replies" v-if='index<5'>
                    <router-link :to="{name:'myArticle',params:{id:data.id,name:data.author.loginname}}">
                        {{data.title|subString}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'sideBar',
    data(){
        return {
            authorData:[]
        }
    },
    methods:{
       getData(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((res)=>{
                this.authorData=res.data.data
                
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
    width:calc(15% - 10px);
    border-radius:6px;
    float: right;
    padding-top:15px;
    margin-right:1%;
}
.author-info,.author-topics,.author-replies{
    width:100%;
    overflow: hidden;
    font-size: 14px;
    margin-bottom: 15px;
    border-radius:3px;
    ul{
        padding:10px;
        color:#778087;
        li{
            margin-bottom:6px;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    background: #fff;
    .header{
        background: rgb(246,246,246);
        padding:10px;
    }
}
.clearfix::after{
    content:'';
    clear:both;
    display: block;
}
.aAndi{
    margin-left:6px;
    color:#778087;
}
</style>

