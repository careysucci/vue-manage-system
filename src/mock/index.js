import Mock from 'mockjs';
import homeApi from "@/mock/home";
import userApi from "@/mock/user";

// set interval time: 100 -2000ms
Mock.setup({
    timeout: '100-2000'
});

// home relate
Mock.mock(/\/home\/getOrderData/, 'get', homeApi.getOrderData);
Mock.mock(/\/home\/getTableData/, 'get', homeApi.getTableData);


Mock.mock(/\/api\/user\/getUser/, 'get', userApi.getUserList);