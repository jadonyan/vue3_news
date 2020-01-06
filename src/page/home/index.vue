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
    import Header from '@/components/header.vue'
    import Menu from '@/components/menu.vue'
    import Main from '@/components/main.vue'

    export default {
        data() {
            return {
                title:'国内图书（假分页）',
                tableData: [],
                allData:[],
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
                this.$axios.get("http://www.location.com/books/all")
                    .then((response)=>{
                        this.clog('call axios to get data');
                        this.allData = response.data.bookslist;
                        this.totalCount = response.data.totalCount;//总条数
                    });
            }
        },
        components:{
            Header,Menu,Main
        },
        created(){
            this.getBooks();
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
