import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/', redirect: '/login' }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// to将要访问的路径，from代表从哪个路径来，next是一个函数表示放行
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    const tokenStr = window.localStorage.getItem('token')
    if (!tokenStr) {
      return next('/login')
    } else {
      return next()
    }
  }
})

export default router
