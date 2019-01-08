<template>
<div id="myArticle">
    <main>
        <div class="content-wrapper">
            <div class="user-art">
                <div class="title-data">
                    <div class="title">
                        <span class=tab v-if="articleData.good&&articleData.top">{{articleData|correctTab}}</span>
                        <span class=tab v-else-if="articleData.good">{{articleData|correctTab}}</span>
                        <span class=tab v-else-if="articleData.top">{{articleData|correctTab}}</span>
                        <span class=real-title>{{articleData.title}}</span>
                    </div>
                    <div class="post-data">
                        <ul> 
                            <li>●发布于 {{articleData.create_at|formatTime}} </li>&nbsp;
                            <li v-if="articleData.author"> ●作者 {{articleData.author.loginname }} </li>&nbsp;
                            <li> ●{{articleData.visit_count}} 次浏览 </li>&nbsp;
                            <li> ●来自 {{articleData|correctTab}} </li>&nbsp;
                        </ul>
                    </div>
                </div>
                <div class="content" v-html='articleData.content'></div>
            </div>
            
            <div class="replies">
                <ul>
                    <li class=first-li>{{articleData.reply_count}}回复</li>
                    <li v-for='(data,index) in articleData.replies'>
                       
                        <span class='randt'>
                            <span class='otherAvatar'><img :src="data.author.avatar_url" alt=""></span>
                            <span class='replyUser'>{{data.author.loginname}}</span>
                            <span class='timeAndFloor'>{{index+1}}楼 {{data.create_at|formatTime}}</span>
                        </span>
                        
                        <span class='replyContent' v-html='data.content'></span>
                        <span :class="['thumerNum',{'active':data.ups.length>2}]" v-show='data.ups.length>0'><img  class=thumb src="../assets/thumbUp.svg" alt=""> {{data.ups.length}}</span>
                    </li>
                </ul>
            </div>
        </div>  
    </main>
    
</div>
</template>

<script>

export default {
    name: 'myArticle',
    data(){
        return {
            id:'',
            articleData:[]
        }
    },
    methods:{
        getArtData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then((res)=>{
                console.log(res.data.data)
                this.articleData=res.data.data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    beforeMount(){
        if(this.$route.params.id){this.getArtData()}
        else{}
    }
}
</script>

<style lang="scss" scoped>
.content-wrapper{
   width:1100px;
   margin:15px auto;
   margin-left:230px;
   border-radius:3px;
}
.user-art{
    background: white;
    border-radius: 3px;
}
.title-data{
    border-bottom:1px solid rgb(225,225,225);
    height:87px;
    position: relative;
    padding:10px;
}
.real-title{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
    position: absolute;
    left:50px;
}
.tab{
    display: inline-block;
    height:18px;
    width: 32px;
    font-size: 12px;
    border-radius:3px;
    background:#80bd01;
    color:white;
    text-align: center;
    line-height: 18px;
    position: absolute;
    top:26px;
    font-weight: bold;
}

.post-data{
    position: absolute;
    bottom: 1vh;
    left:0px;
    ul{
        display: flex;
        padding-left:10px;
        li{
            color:#838383;
            font-size: 12px;
        }
    }
}
.content{
    margin:20px;
    line-height:180%;
}
img{
    width: 30px;
    height:30px;
}
.replies{
    border-radius: 3px;
    background: white;
    .first-li{
        height:40px;
        padding: 10px;
        color:#444;
        font-size: 14px;
        background: #f6f6f6;
    }
    li .thumerNum.active{
        background: #f4fcf0;
    }
    li{
        .replyUser{
            margin-left:10px;
            width: 30px;
            height:30px;
            vertical-align: top;
            
        }
        .timeAndFloor{
            vertical-align: top;
        }
        .randt{
            color:#666;
            font-size: 12px;
            font-weight: 600;
            position: absolute;
            left:10px;
            top:10px;
            
        }
        .replyContent{
            display: inline-block;
            margin-left:50px;
            margin-top:30px;
            
        }
        .thumerNum{
            position: absolute;
            right:20px;
            color:grey;
            font-size:15px;
        }
        position: relative;
        min-height:80px;
        padding: 10px;
        border-bottom:1px solid #f0f0f0;
    }
}
.thumb{
    height:10px;
    width:10px;
}
</style>
