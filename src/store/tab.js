import Cookie from 'js-cookie';

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
        },
        getMenu(state){
            state.menu = Cookie.get('menu') || [];
        },
        setMenu(state, val){
            state.menu = val;
            Cookie.set('menu', JSON.stringify(val));
        },
        clearMenu(state){
            state.menu = [];
            Cookie.remove('menu');
        },
        // add dynamic router
        addMenu(state, router){
            let menu = JSON.parse(Cookie.get('menu') || '[]');
            if (!menu) {
                return;
            }

            let currentMenu = [
                {
                    path: '/',
                    component: reslove => require(["@/views/Main"], reslove),
                    children: []
                }
            ];

            menu.forEach(item => {
                if (item.children){
                    item.children = item.children.map(subitem => {
                        subitem.component = reslove => require([`@/views/${subitem.url}`], reslove);
                        return subitem
                    });
                    currentMenu[0].children.push(...item.children);
                }else {
                    item.component = reslove => require([`@/views/${item.url}`], reslove);
                    currentMenu[0].children.push(item);
                }
            });
            router.addRoutes(currentMenu);
        }
    },
    actions: {},
}