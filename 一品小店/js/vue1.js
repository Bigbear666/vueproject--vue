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

let vn = new Vue({
    el: '#main',
    data: {
        ma: [{
            "h1T": "潮流美食",
            "src": "images/shou-chao-01.jpg"
        }],
        rList: [{
            "src": "images/shou-chao-02.jpg",
            "qkl": "qkl",
            "txt": "草莓巧克力夹心糯米糍",
            "pTit": "柔软Q弹的糯米皮、白巧克力还有草莓酱夹心，双层白色的层次感，柔软爽滑的口感，取出一颗品尝，香甜柔顺的口感让人止不住吃了又想吃。"
        }, {
            "src": "images/shou-chao-03.jpg",
            "qkl": "qkl",
            "txt": "提拉米苏蛋糕",
            "pTit": "俄罗斯提拉米苏蛋糕是酥软型的一款高点。因为蛋糕本身水分极少而每层饼中都有俄罗斯特有的椴树蜂蜜成分所以大大提高了保存时间。"
        }],
        L: [{
            "tP": "images/shou-chao-04.jpg",
            "csl": "csl",
            "txt": "布尔本德式黄油奶油曲奇饼"
        }, {
            "tP": "images/shou-chao-05.jpg",
            "csl": "csl",
            "txt": "布尔本德式黄油奶油曲奇饼"
        }, {
            "tP": "images/shou-chao-06.jpg",
            "csl": "csl",
            "txt": "德式黄油奶油颗粒糖果"
        }],
        uL: [{
            "tit": "热门标签",
            "src": "images/shou-xiu-01.jpg"
        }],
        two: [{
            "bq": "热门标签"
        }],
        lst: [{
                "adr": "日本"
            },
            {
                "adr": "台湾"
            },
            {
                "adr": "饼干"
            },
            {
                "adr": "蛋糕"
            },
            {
                "adr": "坚果"
            },
            {
                "adr": "韩国"
            },
            {
                "adr": "年货"
            },
            {
                "adr": "糖果"
            },
            {
                "adr": "巧克力"
            }
        ],
        lis: [{
            "tPic": "images/shou-xiu-01.jpg"
        }],
        Pic: [{
            "Tp": "images/shou-xiu-02.jpg",
            "tXt": "COLLON迁利酸梅汤",
            "scj": "0.0",
            "jg": "11.0",
            "gm": "购买"
        }, {
            "Tp": "images/shou-xiu-03.jpg",
            "tXt": "白松露牛奶巧克力球",
            "scj": "0.0",
            "jg": "110.0",
            "gm": "购买"
        }, {
            "Tp": "images/shou-xiu-04.jpg",
            "tXt": "乐天纯可可脂黑巧克力",
            "scj": "0.0",
            "jg": "24.0",
            "gm": "购买"
        }],
        ls4: [{
            "Tp": "images/shou-xiu-05.jpg",
            "tXt": "水果碳酸糖98g 卡通造型",
            "scj": "0.0",
            "jg": "17.0",
            "gm": "购买"
        }, {
            "Tp": "images/shou-xiu-06.jpg",
            "tXt": "脆心朱克力",
            "scj": "0.0",
            "jg": "5.0",
            "gm": "购买"
        }, {
            "Tp": "images/shou-xiu-07.jpg",
            "tXt": "曲奇饼干",
            "scj": "0.0",
            "jg": "11.0",
            "gm": "购买"
        }, {
            "Tp": "images/shou-xiu-08.jpg",
            "tXt": "麦提马卡龙",
            "scj": "0.0",
            "jg": "18.0",
            "gm": "购买"
        }],
        lis1pic: [{
            "hf": "images/shou-xiu-banner.jpg"
        }],
        tittxt: [{
            "title": "进口零食"
        }],
        jklslist: [{
            "jkpic": "images/shou-jin-01.jpg",
            "jktit": "bake cookie烤制浓厚巧克力",
            "jkjg": "15.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-02.jpg",
            "jktit": "小松饼永黄味小米脆饼干",
            "jkjg": "44.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-03.jpg",
            "jktit": "烘米苏奶酪咖啡巧克力",
            "jkjg": "33.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-04.jpg",
            "jktit": "奶油夏威夷果零食进口坚果",
            "jkjg": "45.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-05.jpg",
            "jktit": "斯提拉米苏蛋糕",
            "jkjg": "17.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-06.jpg",
            "jktit": "malteserl麦提莎脆心朱古力",
            "jkjg": "44.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-07.jpg",
            "jktit": "森永巧克力粒子曲奇饼干",
            "jkjg": "23.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-08.jpg",
            "jktit": "麦提沙脆心朱古力",
            "jkjg": "11.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-09.jpg",
            "jktit": "东鸠桃烤杏仁焦糖栗米条",
            "jkjg": "11.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-10.jpg",
            "jktit": "COLLON迁利抹茶忌廉蛋卷",
            "jkjg": "15.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-10.jpg",
            "jktit": "COLLON迁利抹茶忌廉蛋卷",
            "jkjg": "15.00",
            "jkgm": "购买"
        }, {
            "jkpic": "images/shou-jin-10.jpg",
            "jktit": "COLLON迁利抹茶忌廉蛋卷",
            "jkjg": "15.00",
            "jkgm": "购买"
        }]
    }
});

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
})