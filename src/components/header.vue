<template>
    <div class="header_div">
        <Logo><div slot="app_name" style="color: #fff; float: left">Application</div></Logo>
        <UserInfo :user="user"></UserInfo>
        <Languages @changeLang="changeLang"></Languages>
    </div>
</template>

<script>
    import UserInfo from './userinfo.vue'
    import Languages from './languages.vue'
    import Logo from './logo.vue'

    export default {
        data(){
            return {
                isLogin: false,
                user: null,
            }
        },
        methods:{
            changeLang(lang){
                //TODO::后期再实现多国化
                this.$toast(this.LANGS[lang] + ' 切换成功', 'top');
                //this.succMsgHint(this.LANGS[lang]);
            },
        },
        created(){
            if (this.$store.getters.getStorage) {
                if (typeof this.$store.getters.getStorage === 'string') {
                    this.user = JSON.parse(this.$store.getters.getStorage);
                } else {
                    this.user = this.$store.getters.getStorage;
                }
                //以后会改为token check
                this.isLogin = true;
            } else {
                this.user = {
                    username: null
                };
                this.$router.push('login');
            }
        },
        components:{
            UserInfo, Languages, Logo
        }

    }
</script>

<style>
    .header_div{
        height: 60px;
        line-height: 60px;
        background-color: #31abc1;
        border-bottom: 1px solid #dedede;
    }
</style>