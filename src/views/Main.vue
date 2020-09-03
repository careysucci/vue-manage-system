<template>
    <el-container style="height: 100%">
        <el-aside width="auto"><common-aside></common-aside></el-aside>
        <el-container>
            <el-header><common-header></common-header></el-header>
            <common-tab></common-tab>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonHeader from "@/components/CommonHeader";
    import CommonAside from "@/components/CommonAside";
    import CommonTab from "@/components/CommonTab";

    export default {
        components: {
            CommonHeader,
            CommonAside,
            CommonTab
        },
        name: "Main"
    }
</script>

<style lang="scss" scoped>
    .el-header{
        background-color: #545c64;
    }
    .el-main {
        padding-top: 0px;
    }
</style>