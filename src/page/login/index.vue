<template>
    <div class="login-div">
        <div class="login-head">
            <Languages @changeLang="changeLang"></Languages>
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
                                <el-input v-model="user.password" show-password></el-input>
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
                },
            }
        },
        methods: {
            doLogin(){
                //TODO::check用户名和密码
                this.$axios.post("http://www.location.com/login")
                    .then((response)=>{
                        if(response.data.isLogin){
                            //将用户信息填入到localstorage中
                            this.$store.commit('$_setStorage', JSON.stringify(this.user))
                            this.$router.push('home');
                        }
                    });
            },
            changeLang(lang){
                this.succMsgHint(this.LANGS[lang]);
            }
        },
        components:{
            Languages
        },
    }
</script>

<style>
    .login-head {
        height: 60px;
        line-height: 60px;
        margin-bottom: 20vh;
    }
    .login-head .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
        font-size: 15px;
    }
    .float_right{
        float: right;
    }
</style>
