import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        text: '首页',
        component: () => import('@/App.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/Index/index.vue')
            }, {
                path: 'list',
                name: 'company_list',
                component: () => import('@/views/List/index.vue')
            }, {
                path: '/companyInfo',
                name: 'company_info',
                component: () => import('@/views/CompanyInfo/index.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
