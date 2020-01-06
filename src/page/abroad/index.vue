<template>
    <div>
        <Header></Header>
        <el-container style="height: 880px; border: 0">
            <Menu></Menu>
            <Main :tableData="tableData" :columnsData="columnData" :title="title"
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
                title:'国外要闻',
                tableData: [],
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
                this.$axios.get("http://www.location.com/news/list?page=" + this.currentPage + "&size=" + this.pageSize)
                        .then((response)=>{
                            this.tableData=response.data.newslist;
                            this.totalCount = response.data.totalCount;//总条数
                        })
            }
        },
        components:{
            Header,Menu,Main
        },
        created(){
            this.getNews();
        },
        beforeUpdate(){
            this.getNews();
        },
    }
</script>

<style>
</style>
