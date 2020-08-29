import Mock from 'mockjs';


let List = []
export default {
    getOrderData: () => {
        return {
            code: 20000,
            data: {
                orderData: [
                    {
                        label: '今日支付订单',
                        value: Mock.Random.float(50, 10000, 0, 2),
                        icon: "success",
                        color: "#2ec7c9"
                    },
                    {
                        label: '今日收藏订单',
                        value: Mock.Random.float(500, 10000, 0, 2),
                        icon: "star-on",
                        color: "#ffb980"
                    },
                    {
                        label: '今日未支付订单',
                        value: Mock.Random.float(1000, 5000, 0, 2),
                        icon: "s-goods",
                        color: "#5ab1ef"
                    },
                    {
                        label: '今日支付订单',
                        value: Mock.Random.float(50, 10000, 0, 2),
                        icon: "success",
                        color: "#2ec7c9"
                    },
                    {
                        label: '今日收藏订单',
                        value: Mock.Random.float(500, 10000, 0, 2),
                        icon: "star-on",
                        color: "#ffb980"
                    },
                    {
                        label: '今日未支付订单',
                        value: Mock.Random.float(1000, 5000, 0, 2),
                        icon: "s-goods",
                        color: "#5ab1ef"
                    },
                ]
            }
        }
    },
    getTableData: () => {
        for (let i=0; i<7;i++){
            List.push(Mock.mock({
                python: Mock.Random.float(100, 8000, 0, 2),
                java: Mock.Random.float(100, 8000, 0, 2),
                "c++": Mock.Random.float(100, 8000, 0, 2),
                'c#': Mock.Random.float(100, 8000, 0, 2),
                goland: Mock.Random.float(100, 8000, 0, 2),
                'vue.js': Mock.Random.float(100, 8000, 0, 2),
                'django': Mock.Random.float(100, 8000, 0, 2),
            }));
        }

        return {
            code: 20000,
            data: {
                tabledata: [
                    {
                        course: 'python',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'java',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'c++',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'c#',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'goland',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'vue.js',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    },
                    {
                        course: 'django',
                        today: Mock.Random.float(10, 500, 0, 2),
                        month: Mock.Random.float(500, 5000, 0, 2),
                        total: Mock.Random.float(10000, 100000, 0, 2),
                    }
                ],
                orderData: {
                    date: ['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                    data: List
                },
                userData: [
                    {
                        date: '星期一',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '星期二',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },{
                        date: '星期三',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },{
                        date: '星期四',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },{
                        date: '星期五',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },{
                        date: '星期六',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },{
                        date: '星期七',
                        new: Mock.Random.integer(1,100),
                        active: Mock.Random.integer(100, 1000)
                    },
                ],
                videoData: [
                    {
                        name: 'python',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'c++',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'c#',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'goland',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'vue.js',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'django',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                ]
            }
        }
    }
}