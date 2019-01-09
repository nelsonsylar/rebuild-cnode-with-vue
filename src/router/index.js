import Vue from 'vue'
import Router from 'vue-router'
import postList from '@/components/postList'
import myArticle from '@/components/myArticle'
import userInfo from '@/components/userInfo'
import sideBar from '@/components/sideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'postList',
      components: {
        main:postList
      }
    },
    {
      path: '/myArticle/:id&name=:name',
      name: 'myArticle',
      components: {
        main:myArticle,
        side:sideBar
      }
    },
    {
      path: '/userInfo/:id',
      name: 'userInfo',
      components: {
        main:userInfo
      }
    }
  ]
})
