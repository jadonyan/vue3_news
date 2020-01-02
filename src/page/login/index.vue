<template>
    <div class="login-div">
        <div class="login-head">
            <div class="float_right">
                <Languages>
                    <div slot="langs">
                        dfadfadsf
                        dfads
                        fda
                        fdas
                        f
                    </div>
                </Languages>
            </div>
        </div>
        <div class="login-body">
            <el-col :span="8" :offset="8">
                <el-card class="box-card" shadow="always">
                    <div slot="header" class="clearfix">
                        <span>登录</span>
                        <el-tooltip effect="light" content="点击注册" placement="top-start">
                            <el-button class="float_right" style="padding: 3px 0" type="text">没有账号？</el-button>
                        </el-tooltip>
                    </div>
                    <el-row>
                        <el-form ref="form" label-width="80px">
                            <el-form-item label="用户名">
                                <el-input v-model="user.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="user.password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" class="float_right" @click="doLogin">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </el-row>
                </el-card>
            </el-col>
        </div>
    </div>
</template>

<script>
    import Languages from '../../components/languages.vue'

    export default {
        data() {
            return {
                user:{
                    username:'zhangsan',
                    password:'123',
                }
            }
        },
        methods: {
            doLogin(){
                //将用户信息填入到localstorage中
                this.$store.commit('$_setStorage', JSON.stringify(this.user))
                this.$router.push('home');
            }
        },
        components:{
            Languages
        }
    }
</script>

<style>
    .login-head{
        height: 10vh;
        margin-bottom: 20vh;
    }
    .lang_btn{
        padding: 30px 50px;
        font-size: large;
    }
    .float_right{
        float: right;
    }
</style>
