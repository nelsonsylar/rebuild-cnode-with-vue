<template>
    <span class="content-wrapper">
        <button @click='firstBTN'>首页</button><button @click='previousBTN'>上一页</button><button :class="{nowButton:btn===nowButton}"  v-for="btn in buttons" @click='othersBTN(btn)'>{{btn}}</button><button @click='nextBTN'>下一页</button>
    </span>
</template>
<script>
import $ from 'jquery'
export default {
    name:'selectBar',
    data(){
        return {
            buttons:[1,2,3,4,5,'...'],
            nowButton:1   
        }
    },
    methods:{
        firstBTN(){
            //发送数据到potlistvue上
            this.$emit('handle',1)
        },
        previousBTN(){
            //发送数据到potlistvue上
            $('button.nowButton').prev().click()
            
        },
        nextBTN(){
            //发送数据到potlistvue上
           $('button.nowButton').next().click()
        },
        othersBTN(btn){
            this.nowButton=btn
            if(this.buttons[4]===btn){
            this.buttons.shift()
            this.buttons.splice(4,0,this.buttons[3]+1)
            }else if(this.buttons[0]===btn&&btn>1){
                this.buttons.pop()
                this.buttons.splice(0,0,this.buttons[0]-1)
            }
            this.$emit('handle',this.nowButton)
            }
            
            //发送数据到potlistvue上
        },

    }

</script>

<style lang="scss" scoped>
.content-wrapper{
    padding:10px;
    line-height: 20px;
    margin-left:30px;
    button{
        outline:none;
        border-radius:3px;
        border: 1px solid rgb(225,225,225);  
        height:25px;
        margin:auto 1px;
        width:50px;
        background: white;
        vertical-align: middle;
    }
    button:hover{
        background: rgb(225,225,225);
        cursor: pointer;
    }
}
.nowButton{
    background-color: #000!important;
    color:white;
}
</style>
