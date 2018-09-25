let v = new Vue({
    el: '#app',
    data: {
        logo: [{
            yp: "一品小店",
            "tp": "text",
            "pc": "搜索零食",
            "fst": "first",
            "btn": "button",
            "ss": "搜索",
            "two": "sec"
        }],
        oL: [{
            "frist": "全部产品分类",
        }],
        list: [{
            "src": "index.html",
            "txt": "首页"
        }, {
            "src": "linshi.html",
            "txt": "零食"
        }, {
            "src": "meijiu.html",
            "txt": "美酒"
        }, {
            "src": "bentu.html",
            "txt": "当地特色"
        }, {
            "src": "login.html",
            "txt": "购物车"
        }],
        sPlist: [{
            "src": "images/leftlist-01.png",
            "txt": "休闲零食"
        }, {
            "src": "images/leftlist-02.png",
            "txt": "进口零食"
        }, {
            "src": "images/leftlist-03.png",
            "txt": "生鲜 · 果蔬"
        }, {
            "src": "images/leftlist-04.png",
            "txt": "美酒佳酿"
        }, {
            "src": "images/leftlist-05.png",
            "txt": "茶 · 冲饮"
        }, {
            "src": "images/leftlist-06.png",
            "txt": "地方特产"
        }, {
            "src": "images/leftlist-07.png",
            "txt": "食品礼券"
        }],
        img: [{
            "pic": "images/banner.jpg"
        }]
    }
});

let c = new Vue({
    el: "#gwc",
    data: {
        list: [{
            "gwctit": " 购物车"
        }]
    }
})

let vm = new Vue({
    el: "#r-footer",
    data: {
        lt6: [{
            "lis1": "常用服务",
            "lis2": "问题咨询",
            "lis3": "订单咨询",
            "lis4": "保修退换货",
        }, {
            "lis1": "常用服务",
            "lis2": "问题咨询",
            "lis3": "订单咨询",
            "lis4": "保修退换货",
        }, {
            "lis1": "常用服务",
            "lis2": "问题咨询",
            "lis3": "订单咨询",
            "lis4": "保修退换货",
        }, {
            "lis1": "常用服务",
            "lis2": "问题咨询",
            "lis3": "订单咨询",
            "lis4": "保修退换货",
        }, {
            "lis1": "常用服务",
            "lis2": "问题咨询",
            "lis3": "订单咨询",
            "lis4": "保修退换货",
        }]
    }
});