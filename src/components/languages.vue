<template>
    <div class="langs_div">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                {{choosedLanguage}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(lang, key) in LANGS" :key="key" :command="key">{{lang}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                choosedLanguage: "简体中文",
            }
        },
        methods:{
            handleCommand(command){
                this.$emit('changeLang', command);
            }
        }
    }
</script>

<style>
    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        font-size: 15px;
    }
    .el-icon-arrow-down {
        font-size: 15px;
    }
    .langs_div{
        margin-right: 20px;
        float: right;
    }
</style>
