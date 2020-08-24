import Mock from 'mockjs';
import homeApi from "@/mock/home";

// set interval time: 100 -2000ms
Mock.setup({
    timeout: '100-2000'
});

// home relate
Mock.mock(/\/home\/getOrderData/, 'get', homeApi.getOrderData);
Mock.mock(/\/home\/getTableData/, 'get', homeApi.getTableData);