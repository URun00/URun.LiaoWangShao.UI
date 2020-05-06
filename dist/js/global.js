var app = new Vue({
    el: '#index',
    delimiters: ['${', '}'],
    data() {
        return {
            activeName: 'second',
            pageArr: [
                {
                    id: 1,
                    name: '任务分类上报',
                    active: true,
                    icon: 'icon-icon_5',
                    child: [
                        {
                            name: '全部',
                            url: 'index.html'
                        },
                        {
                            name: '待处理',
                            url: '待处理.html'
                        },
                        {
                            name: '已处理',
                            url: '已处理.html'
                        }
                    ]
                },
                {
                    id: 2,
                    name: '核实反馈工作台',
                    active: false,
                    icon: 'icon-icon_6',
                    child: [
                        {
                            name: '全部',
                            url: '核实反馈工作台.html'
                        },
                        {
                            name: '待处理',
                            url: '待处理.html'
                        },
                        {
                            name: '已处理',
                            url: '已处理.html'
                        }
                    ]
                }
            ],
            tableData: [
                {
                    date: '2020-02-16  14:03:00',
                    name: 'jdhsjd/黄多多',
                    matter: '处置任务（IDXGTS254568724），任务结束',
                    company:'杭州市',
                    operation:'PC',
                    role:'管理员'
                },
                {
                    date: '2020-02-16  14:03:00',
                    name: 'jdhsjd/黄多多',
                    matter: '转发任务（IDXGTS254568724），上报任务至杭州市',
                    company:'杭州市',
                    operation:'PC',
                    role:'管理员'
                }
            ]
        };
    },
    methods: {
        slide: function (event) {
            let curTarget = event.currentTarget,
                containsCurClass = curTarget.classList.contains("showTag"),
                nextSibling = curTarget.nextSibling;
            while (nextSibling.nodeType == 3 && /\s/.test(nextSibling.nodeValue)) {
                nextSibling = nextSibling.nextSibling;
            }
            let detailScrollHeight = nextSibling.scrollHeight;
            if (containsCurClass) {
                curTarget.classList.remove("showTag");
                this.toggleSlide(nextSibling, detailScrollHeight, '500');
            } else {
                curTarget.classList.add("showTag");
                this.toggleSlide(nextSibling, 0, '500');
            }
        },
        toggleSlide: function (dom, height, time) {
            dom.style.transition = 'height ' + time + 'ms';
            dom.style.height = height + 'px';
        },
        handleClick(tab, event) {
            //console.log(tab, event);
        }
    }
});


/*
var vm_dist;
function jt(){
    vm_dist = new Vue({
        el: '#left',
        delimiters: ['${','}'],
        data() {
            return {
                showTag:true,
                pageArr: [
                    {
                        id:1,
                        name: '任务分类上报',
                        active: true,
                        icon: 'icon-icon_5',
                        child:[
                            {
                                name:'全部',
                                url: 'index.html'
                            },
                            {
                                name:'待处理',
                                url: '待处理.html'
                            },
                            {
                                name:'已处理',
                                url: '已处理.html'
                            }
                        ]
                    },
                    {
                        id:2,
                        name: '核实反馈工作台',
                        active: false,
                        icon: 'icon-icon_6',
                        child:[
                            {
                                name:'全部',
                                url: '核实反馈工作台.html'
                            },
                            {
                                name:'待处理',
                                url: '待处理.html'
                            },
                            {
                                name:'已处理',
                                url: '已处理.html'
                            }
                        ]
                    },
                ],
                pageDetail: {},
            };
        },
        created() {
            this.pageDetail=sessionStorage.getItem('page')?JSON.parse(sessionStorage.getItem('page')):this.pageArr[0];
            this.setActive()
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            showNav(e){
                this.showTag = this.showTag == e ? '' : e;
            },
            checkActive(item,index){
                if(item.active) return;
                this.pageArr.map(function(itemInfo,indexInfo){
                    itemInfo.active=false
                });
                this.pageArr[index].active=true;
                this.pageDetail=this.pageArr[index];
                location.href=item.url;
                sessionStorage.setItem('page',JSON.stringify(item))
            },
            setActive(){
                let that=this;
                this.pageArr.map(function(itemInfo,indexInfo){
                    if(itemInfo.name!=that.pageDetail.name) itemInfo.active=false;
                    else itemInfo.active=true
                })
            },
        }
    });
}

function init() {
    jt();
}

init();*/
