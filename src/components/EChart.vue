<template>
    <div style="height: 100%" ref="echart">
        echart
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
                        series: []
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
            },
            isCollaspe(){
                return this.$store.state.tab.isCollapse;
            }
        },
        watch: {
            chartData: {
                handler: function () {
                    this.initChart();
                },
                deep: true
            },
            isCollaspe: {
                handler: function () {
                    setTimeout(() => {
                        this.resize();
                    }, 300)
                }
            }
        },
        data(){
            return {
                echart: null,
                axisOption: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: this.chartData.series.forEach(item => item.name)
                    },
                    xAxis: {
                        axisLine: {
                            lineStyle: {
                                color: '#17b3a3'
                            }
                        },
                        axisLabel: {
                            color: '#010a0f'
                        },
                        type: 'category',
                        data: []
                    },
                    yAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#17b3a3'
                                }
                            },
                            type: 'value'
                        }
                    ]
                    ,
                    series: []
                },
                normalOption: {
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [],
                }
            }
        },
        methods: {
            initChart(){
                this.initChartData();
                if(this.echart) {
                    this.echart.setOption(this.options)
                }else {
                    this.echart = echarts.init(this.$refs.echart);
                    this.echart.setOption(this.options);
                }
            },
            initChartData(){
                if (this.isAxisChart){
                    this.axisOption.xAxis.data = this.chartData.xData;
                    this.axisOption.series = this.chartData.series;
                } else {
                    this.normalOption.series = this.chartData.series;
                }
            },
            resize(){
                this.echart ? this.echart.resize(): "";
            }
        },
        mounted() {
            window.addEventListener('resize', this.resize);
        },
        destroyed() {
            window.removeEventListener('resize', this.resize)
        }
    }
</script>

<style lang="scss" scoped>

</style>