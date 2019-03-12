import Vue from 'vue'
//import Router from 'vue-router'
import index from '@/pages/index'
import description from '@/pages/description'
import device from '@/pages/device'
import devicedetails from '@/pages/devicedetails'
import mining from '@/pages/mining'
import management from '@/pages/management'
import user from '@/pages/user'
import ceshi from '@/pages/ceshi'
import ceshinext from '@/pages/ceshinext'
import saomiao from '@/pages/saomiao'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
  const routes= [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/description',
      name:'description',
      component:description,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/device',
      name:'device',
      component:device,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/devicedetails',
      name:'devicedetails',
      component:devicedetails,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/mining',
      name:'mining',
      component:mining
    },
    {
      path:'/management',
      name:'management',
      component:management
    },
    {
      path:"/user",
      name:'user',
      component:user
    },
    {
      path:"/ceshi",
      name:'ceshi',
      component:ceshi
    },
    {
      path:"/ceshinext",
      name:'ceshinext',
      component:ceshinext
    },
    {
      path:"/saomiao",
      name:'saomiao',
      component:saomiao
    }
  ]
  
const router = new VueRouter({
  routes: routes
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {     // 哪些需要验证
//     if (!sessionStorage.getItem("token")) {                      // token存在条件   
//       next({
//         path: '/saomiao',                                               // 验证失败要跳转的页面
//         query: {
//            redirect: to.fullPath                                 // 要传的参数
//          }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()                                                       // 确保一定要调用 next()
//   }
// })

// export default router
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = sessionStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/saomiao');
    } else {
      next();
    }
  }
});
 
export default router;
