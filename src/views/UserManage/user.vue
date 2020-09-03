<template>
    <div class="manage">
        <el-dialog :title="operateType === 'add' ? '新增用户': '修改用户'" :visible.sync="isShow">
            <common-form :form="operateForm" :formLabel="operateLabel"></common-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary">+新增</el-button>
            <common-form :form="searchForm" :formLabel="formLabel" inline>
                <el-button type="primary">搜索</el-button>
            </common-form>
        </div>
        <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList"
                      @edit="editUser"></common-table>
    </div>
</template>

<script>
    import CommonForm from "@/components/CommonForm";
    import CommonTable from "@/components/CommonTable";

    export default {
        components: {
            CommonForm,
            CommonTable
        },
        data() {
            return {
                operateType: 'add',
                isShow: false,
                operateForm: {
                    name: '',
                    age: '',
                    sex: '',
                    birth: '',
                    addr: ''
                },
                operateLabel: [
                    {
                        model: 'name',
                        label: '姓名',
                    },
                    {
                        model: 'age',
                        label: '年龄',
                    },
                    {
                        model: 'sex',
                        label: '性别',
                        type: 'select',
                        opts: [
                            {
                                value: 0,
                                label: '女'
                            },
                            {
                                value: 1,
                                label: '男'
                            }
                        ],
                    },
                    {
                        model: 'birth',
                        label: '生日',
                        type: 'date'
                    },
                    {
                        model: 'addr',
                        label: '地址',
                    },
                ],
                searchForm: {
                    keyword: ""
                },
                formLabel: [
                    {
                        model: 'keyword',
                        label: ""
                    }
                ],
                tableData: [],
                tableLabel: [
                    {
                        prop: 'name',
                        label: '姓名'
                    },
                    {
                        prop: 'age',
                        label: '年龄'
                    },
                    {
                        prop: 'sexLabel',
                        label: '性别'
                    },
                    {
                        prop: 'birth',
                        label: '出生日期'
                    },
                    {
                        prop: 'addr',
                        label: '地址',
                        width: 280
                    },
                ],
                config: {
                    page: 1,
                    total: 20,
                    loading: false
                }
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.config.loading = true;
                this.$http.get("/api/user/getUser", {
                    params: {
                        page: this.config.page,
                    }
                }).then(res => {
                    console.log(res.data);
                    this.tableData = res.data.list.map(item => {
                        item.sexLabel = item.sex === 0 ? "女" : "男";
                        return item;
                    });
                    this.config.total = res.data.count;
                    this.config.loading = false;
                })
            },
            editUser(row) {
                this.operateType = 'edit';
                this.isShow = true;
                this.operateForm = row;
                console.log(row)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/common.scss";
</style>