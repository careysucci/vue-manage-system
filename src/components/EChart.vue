<template>
    <div style="height: 100%" ref="echart">

    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        props: {
            chartData: {
                type: Object,
                default(){
                    return {
                        xData: [],
                        series: [

                        ]
                    }
                }
            },
            isAxisChart: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            options(){
                return this.isAxisChart ? this.axisOption: this.normalOption;
            }
        },
        data(){
            return {
                echart: null,
                axisOption: {
                    xAxis: [
                        {
                            type: 'category',
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ]
                    ,
                    series: []
                },
                normalOption: {
                    series: []
                }
            }
        },
        methods: {
            initChart(){
                if(this.echart) {
                    this.echart.setOption(this.options)
                }else {
                    this.echart = echarts.init(this.$refs.echart)
                }
            },
            initChartData(){
                if (this.isAxisChart){

                } else {

                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>