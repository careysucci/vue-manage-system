<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :collapse="isCollapse">

        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
            <i :class="'el-icon-'+ item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="index.toString()" v-for="(item1, index) in hasChildren" :key="index">
            <template slot="title">
                <i :class="'el-icon-'+item1.icon"></i>
                <span>{{item1.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="subitem.path" v-for="(subitem, subindex) in item1.children" :key="subindex"
                              @click="clickMenu(subitem)">
                    {{subitem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        computed: {
            noChildren() {
                return this.aside.filter(item => !item.children);
            },
            hasChildren() {
                return this.aside.filter(item => item.children);
            },
            isCollapse() {
                return this.$store.state.tab.isCollapse;
            }
        },
        data() {
            return {
                aside: [
                    {
                        path: '/',
                        label: '首页',
                        name: 'home',
                        icon: 's-home'
                    },
                    {
                        path: '/video',
                        label: '视频管理',
                        name: 'video',
                        icon: 'video-play'
                    },
                    {
                        path: '/user',
                        label: '用户管理',
                        name: 'user',
                        icon: 'user'
                    },
                    {
                        label: '其他',
                        icon: 's-help',
                        children: [
                            {
                                path: '/page1',
                                label: '页面1',
                                name: 'page1',
                                icon: 'house'
                            },
                            {
                                path: '/page2',
                                label: '页面2',
                                name: 'page2',
                                icon: 'house'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            clickMenu(item) {
                this.$store.commit('selectMenu', item);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu {
        height: 100%;
        border: none;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>