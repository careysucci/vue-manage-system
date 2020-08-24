import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: resolve => require(["@/views/Main"], resolve),
        children: [
            {
                path: '/',
                name: 'home',
                component: resolve => require(["@/views/Home/home"], resolve)
            },
            {
                path: '/video',
                name: 'video',
                component: () => import("@/views/VideoManage/videoManage")
            },
            {
                path: '/user',
                name: 'user',
                component: resolve => require(["@/views/UserManage/user"], resolve)
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import("@/views/Other/page1")
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import("@/views/Other/page2")
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
