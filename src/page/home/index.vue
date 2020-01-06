<template>
    <div>
        <Header></Header>
        <el-container style="height: 850px; border: 0">
            <Menu></Menu>
            <Main :tableData="filterData" :columnsData="columnData" :title="title"
                  :currentPage.sync="currentPage" :pageSize.sync="pageSize" :totalCount="totalCount"></Main>
        </el-container>
    </div>
</template>

<script>
    import Header from '../../components/header.vue'
    import Menu from '../../components/menu.vue'
    import Main from '../../components/main.vue'

    export default {
        data() {
            return {
                title:'国内要闻（假分页）',
                tableData: [],
                allData:[],
                currentPage: 1,
                pageSize: 10,
                totalCount: 0,
                columnData:[
                    {
                        prop:'news_title',
                        label: '新闻标题',
                        width: '140',
                    },
                    {
                        prop:'news_press',
                        label: '新闻媒介',
                        width: '140',
                    },
                    {
                        prop:'news_time',
                        label: '发布时间',
                        width: '',
                    },
                ],
            }
        },
        methods:{
            getNews(){
                this.$axios.get("http://www.location.com/news/all")
                    .then((response)=>{
                        window.console.log('call axios to get data');
                        this.allData = response.data.newslist;
                        this.totalCount = response.data.totalCount;//总条数
                    });
            }
        },
        components:{
            Header,Menu,Main
        },
        created(){
            this.getNews();
        },
        computed:{
            filterData(){
                if (this.totalCount) {
                    const start = (this.currentPage-1) * this.pageSize;
                    const end = this.currentPage * this.pageSize > this.totalCount ? this.totalCount : this.currentPage * this.pageSize;
                    let result = [];
                    for(let i=start; i<end; i++){
                        result.push(this.allData[i]);
                    }
                    return result;
                }
                return [];
            }
        }
    }
</script>

<style>
</style>
