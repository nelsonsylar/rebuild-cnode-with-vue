import Vue from 'vue'
import Router from 'vue-router'
import postList from '@/components/postList'
import myArticle from '@/components/myArticle'

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
      path: '/myArticle/:id',
      name: 'myArticle',
      components: {
        main:myArticle
      }
    }
  ]
})
