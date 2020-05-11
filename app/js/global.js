var app = new Vue({
    el: '#left',
    delimiters: ['${', '}'],
    data() {
        return {
            activeName: 'second',
            pageArr: [
                {
                    id: 1,
                    name: '任务分类上报',
                    cur: true,
                    icon: 'icon-icon_5',
                    child: [
                        {
                            name: '全部',
                            active: true,
                            url: 'index.html',
                        },
                        {
                            name: '待处理',
                            active: false,
                            url: '待处理-任务分类上报.html'
                        },
                        {
                            name: '已处理',
                            active: false,
                            url: 'javascript:void(0)'
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
                            url: 'javascript:void(0)'
                        },
                        {
                            name: '待处理',
                            url: 'javascript:void(0)'
                        },
                        {
                            name: '已处理',
                            url: 'javascript:void(0)'
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
    created() {
        this.pageDetail=sessionStorage.getItem('page')?JSON.parse(sessionStorage.getItem('page')):this.pageArr[0].child;
        this.setActive()
    },
    methods: {
        checkActive(item,index){
            if(item.active) return;
            this.pageArr[0].child.map(function(itemInfo,indexInfo){
                itemInfo.active=false
            });
            this.pageArr[index].child.active=true;
            this.pageDetail=this.pageArr[index].child;
            location.href=item.url;
            sessionStorage.setItem('page',JSON.stringify(item))
        },
        setActive(){
            let that=this;
            this.pageArr[0].child.map(function(itemInfo,indexInfo){
                if(itemInfo.name!=that.pageDetail.name) itemInfo.active=false;
                else itemInfo.active=true
            })
        },
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

