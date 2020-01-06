<template>
    <div>
        <Header></Header>
        <el-container style="height: 880px; border: 0">
            <Menu></Menu>
            <Main :tableData="tableData" :columnsData="columnData" :title="title"
                  :currentPage.sync="currentPage" :pageSize.sync="pageSize"
                  :totalCount="totalCount"></Main>
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Menu from '@/components/menu.vue'
    import Main from '@/components/main.vue'

    export default {
        data() {
            return {
                title:'国外图书（真分页）',
                tableData: [],
                currentPage: 1,
                pageSize: 10,
                totalCount: 0,
                columnData:[
                    {
                        prop:'book_title',
                        label: '图书标题',
                        width: '140',
                    },
                    {
                        prop:'book_press',
                        label: '出版社',
                        width: '140',
                    },
                    {
                        prop:'book_time',
                        label: '添加时间',
                        width: '',
                    },
                ],
            }
        },
        methods:{
            getBooks(){
                this.$axios.get("http://www.location.com/books/list?page=" + this.currentPage + "&size=" + this.pageSize)
                    .then((response)=>{
                        this.clog('call axios to get data');
                        this.tableData=response.data.bookslist;
                        this.totalCount = response.data.totalCount;//总条数
                    })
            }
        },
        components:{
            Header,Menu,Main
        },
        created(){
            this.getBooks();
        },
        watch:{
            currentPage() {
                this.getBooks();
            },
            pageSize() {
                this.getBooks();
            }
        }
    }
</script>

<style>
</style>
