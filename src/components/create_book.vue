<template>
    <div class="main-form">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="图书名称">
                <el-input v-model="form.book_name"></el-input>
            </el-form-item>
            <el-form-item label="出版社">
                <el-select v-model="form.book_press" placeholder="请选择出版社">
                    <el-option label="人民日报出版社" value="1"></el-option>
                    <el-option label="人民邮电出版社" value="2"></el-option>
                    <el-option label="清华大学出版社" value="3"></el-option>
                    <el-option label="机械工业出版社" value="4"></el-option>
                    <el-option label="电子工业出版社" value="5"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="联系号码">
                <el-input v-valid="'phone'" v-model="form.phone_number" placeholder="自定义指令控制格式"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.book_desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {valid} from '../directive/validate.js';

    export default {
        data() {
            return {
                form: {
                    book_name: '',
                    book_press: '',
                    phone_number: '',
                    book_desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.clog('submit!');
            }
        },

        //注册局部指令
        directives:{
            valid,
        }
    }
</script>

<style>
    .main-form{
        margin: 20px;
    }
</style>