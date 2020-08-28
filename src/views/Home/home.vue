<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg">
                    <div class="userinfo">
                        <p class="name">Nick</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间:<span>2020/08/21</span></p>
                    <p>上次登录地点:<span>广东广州</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height: 522px; margin-top: 20px">
                <el-table
                        :data="tableData"
                        style="width: 100%" >
                    <el-table-column
                            :prop="key"
                            :label="value"
                            show-overflow-tooltip v-for="(value, key) in tableLabel" :key="key">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card shadow="hover" v-for="(item, index) in orderData" :key="index"
                         :body-style="{display: 'flex', padding: 0}">
                    <i :class="`el-icon-${item.icon}`" :style="`background-color: ${item.color}`"></i>
                    <div class="detial">
                        <p class="num">￥{{item.value}}</p>
                        <p class="txt">{{item.label}}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover">
                <echart style="height: 280px" :chartData="echartData.order">

                </echart>
            </el-card>
            <div class="graph">
                <el-card shadow="hover">
                    <echart style="height: 260px"></echart>
                </el-card>
                <el-card shadow="hover">
                    <echart style="height: 260px"></echart>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import Echart from '../../components/EChart';
    export default {
        components: {
            Echart
        },
        data() {
            return {
                userImg: require("@/assets/images/userMan.jpg"),
                orderData: [],
                tableData: [],
                tableLabel: {
                    course: "课程",
                    today: "今日购买",
                    month: "本月购买",
                    total: "总购买"
                },
                echartData: {
                    order: {
                        xData: [],
                        series: []
                    },
                    user: {
                        xData: [],
                        series: []
                    },
                    video: {
                        series: []
                    }
                }
            }
        },
        methods: {
            getStatiasData(){
                this.$http.get('/home/getTableData').then(res => {
                    this.tableData = res.data.data.tabledata;
                    let echarData = res.data.data;
                    this.echartData.order.xData = echarData.orderData.date;
                    let keyArray = Object.keys(echarData.orderData.data[0]);
                    keyArray.forEach(key => {
                        this.echartData.order.series.push({
                            name: key,
                            data: echarData.orderData.data.map(item => item[key]),
                            type: 'line'
                        })
                    })
                });
            }
        },
        created(){
            this.getStatiasData();
        },
        mounted() {
            this.$http.get('/home/getOrderData').then(res => {
                this.orderData = res.data.data.orderData;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/home.scss";
</style>