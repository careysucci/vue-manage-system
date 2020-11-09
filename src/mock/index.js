import Mock from 'mockjs';
import homeApi from "@/mock/home";
import userApi from "@/mock/user";
import permissionApi from "@/mock/permission";

// set interval time: 100 -2000ms
Mock.setup({
    timeout: '100-2000'
});

// home relate
Mock.mock(/\/home\/getOrderData/, 'get', homeApi.getOrderData);
Mock.mock(/\/home\/getTableData/, 'get', homeApi.getTableData);


Mock.mock(/\/api\/user\/getUser/, 'get', userApi.getUserList);
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove);
Mock.mock(/\/user\/add/, 'post', userApi.createUser);
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser);
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData);

// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu);