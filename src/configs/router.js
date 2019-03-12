// 路由配置
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
// 一层
// 首页路由
import App from '../App.vue';
import Xlist from '../pages/Xlist.vue';
import Xcart from '../pages/Xcart.vue';
import Xmine from '../pages/Xmine.vue';
import Xtab from '../pages/Xtab.vue';
// 二层路由
import Xuser from '../pages/Xuser.vue';
import Dsign from '../components/D_sign.vue';
import Dlogin from '../components/D_login.vue';
import Xinformation from '../pages/Xinformation.vue';
// 配置路由
const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
    },
    {
        path: '/list',
        name: 'list',
        component: Xlist
    }, {
        path: '/cart',
        name: 'cart',
        component: Xcart,
    }, {
        path: '/mine',
        name: 'mine',
        component: Xmine
    }, {
        path: '/tab/:type',
        name: 'tab',
        component: Xtab
    }, {
        path: '/user',
        name: 'user',
        component: Xuser,
        children: [
            {
                path: 'sign',
                name: 'sign',
                component: Dsign
            }, {
                path: 'login',
                name: 'login',
                component: Dlogin
            }
        ]
    }, {
        path: '/information/:sid',
        name: 'information',
        component: Xinformation
    }
    // // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    , {
        path: '/',
        redirect: {
            name: 'app'
        }
    }
]

// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
    // 如果去购物车或者我的页面的话先进去登录
    if (to.path == '/cart' || to.path == '/mine') {
        //添加条件检测是否登录
        let isLogin = localStorage.getItem("isLogIn");
        if (isLogin != "true") {
            alert("请先进行登录");
            router.push({
                name: "login"
            })
        } else {
            next();
        }
    } else {
        next();
    }
    //延迟时间进购物车
    // setTimeout(()=>{
    //     next()
    // },3000)
})
export default router