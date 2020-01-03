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

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎6',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],

                title:'国外要闻',
                columnData:[
                    {
                        prop:'date',
                        label: '日期2222',
                        width: '140',
                    },
                    {
                        prop:'name',
                        label: '姓名dddd',
                        width: '140',
                    },
                    {
                        prop:'address',
                        label: '地址2222',
                        width: '',
                    },
                ],
            }
        },
        components:{
            Header,Menu,Main
        }
    }
</script>

<style>
</style>
