<template>
    <el-container style="border-left: 1px solid #dedede;">
        <el-header class="main-header">
            <span class="main-title">{{title}}</span>
            <el-dropdown>
                <i class="el-icon-setting" style=""></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-main>
            <el-table highlight-current-row :data="tableData" height="650" :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column v-for="(col, index) in columnsData" :key="index"
                         :prop="col.prop" :label="col.label" :width="col.width" sortable></el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, next, jumper"
                :total="totalCount"
            ></el-pagination>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        props:[
            'tableData', 'columnsData','title', 'currentPage', 'pageSize', 'totalCount'
        ],
        methods:{
            handleSizeChange(val){
                //下面这一行写法无效，因为prop是单向下行绑定，父组件可以修改子组件，但是子组件无法修改父组件的值
                //this.pageSize = val;
                window.console.log('handleSizeChange method called! new value: '+val);
                //所以在父组件中推荐使用  sync  修饰符来保持父子组件的数据统一
                this.$emit('update:pageSize', val);   //此处的update是固定写法
            },
            handleCurrentChange(val){
                window.console.log('handleCurrentChange method called! new value: '+val);
                this.$emit('update:currentPage', val);
            }
        },
        created(){
        }
    }
</script>

<style>
    .main-header{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        text-align: right;
        font-size: 25px;
    }
    .main-header i{
        margin-right: 15px;
        font-size: 25px;
    }
    .main-title {
        float:left;
    }
</style>