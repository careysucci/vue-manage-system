<template>
    <header>
        <div class="l-content">
            <el-button type="plain" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="Object.keys(current).length!==0">
                    {{current.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <img :src="userImg" class="user">
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState({
                current: state => state.tab.currMenu
            })
        },
        data() {
            return {
                userImg: require('@/assets/images/userMan.jpg')
            }
        },
        methods: {
            collapseMenu() {
                this.$store.commit('collapseMenu')
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .l-content {
        display: flex;
        align-items: center;

        .el-breadcrumb {
            padding-left: 10px;
        }
    }

    .r-content {
        cursor: pointer;

        .user {
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }
    }
</style>

<style lang="scss">
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #c8cfd5;
            font-weight: normal;
        }

        &:last-child {
            .el-breadcrumb__inner {
                color: #ffffff;

                &:hover {
                    cursor: pointer;
                    color: #409EFF;
                }
            }
        }
    }
</style>
