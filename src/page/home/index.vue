<template>
    <div>
        <Header></Header>
        <el-container style="height: 880px; border: 0">
            <Menu></Menu>
            <Main :tableData="tableData" :columnsData="columnData" :title="title"></Main>
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
                title:'国内要闻',
                tableData: [],
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
                this.$axios.get("http://www.location.com/news/list")
                    .then((response)=>{
                        this.tableData=response.data.newslist;
                    })
            }
        },
        components:{
            Header,Menu,Main
        },
        created(){
            this.getNews();
        }
    }
</script>

<style>
</style>
