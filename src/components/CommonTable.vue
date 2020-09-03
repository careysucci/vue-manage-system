<template>
    <div class="common-table">
        <el-table
                :data="tableData"
                height="90%"
                v-loading="config.loading">
            <el-table-column
                    label="序号" width="85">
                <template slot-scope="scope">
                    <span >{{(config.page - 1) * 20 + scope.$index + 1 }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    :label="item.label" v-for="item in tableLabel" :key="item.prop" :width="item.width?item.width : 120" show-overflow-tooltip>
                <template slot-scope="scope">
                    <span >{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作" width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                class="pager"
                layout="prev, pager, next"
                :total="config.total"
                v-if="config.total !== 0"
                :current-page.sync="config.page"
        @current-change="changePage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: Array,
            tableLabel: Array,
            config: Object
        },
        methods: {
            handleEdit(row) {
                this.$emit('edit', row)
            },
            handleDelete(row) {
                this.$emit('delete', row)
            },
            changePage(page){
                this.$emit('changePage', page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .common-table {
        height: calc(100% - 62px);
        background-color: #fff;
        position: relative;

        .pager {
            position: absolute;
            bottom: 0px;
            right: 20px;
        }
    }
</style>