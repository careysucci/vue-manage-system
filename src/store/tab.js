export default {
    state: {
        isCollapse: false,
        menu: [],
        currMenu: {},
        tabslist: [
            {
                path: '/',
                label: '首页',
                name: 'home',
                icon: 'home'
            }
        ],
    },
    mutations: {
        selectMenu(state, val){
            if (val.name !== 'home'){
                state.currMenu = val;
                let result = state.tabslist.findIndex(item => item.name === val.name);
                result === -1 ? state.tabslist.push(val):""
            } else {
                state.currMenu = {};
            }
        },
        closeTag(state, val){
            let result = state.tabslist.findIndex(item => item.name === val.name);
            state.tabslist.splice(result, 1);
        },
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        }
    },
    actions: {},
}