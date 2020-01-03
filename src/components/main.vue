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
            <el-table :data="tableData" height="780" :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column v-for="(col, index) in columnsData" :key="index"
                         :prop="col.prop" :label="col.label" :width="col.width" sortable></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        props:[
            'tableData', 'columnsData','title'
        ],
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