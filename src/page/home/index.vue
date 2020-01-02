<template>
    <div>
        this is home page
        <button v-if="isLogin" @click="logout">注销</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isLogin: false,
                user: null
            }
        },
        methods:{
            logout(){
                this.$store.commit('$_removeStorage');
                alert(this.user.username + '注销成功')
                this.$router.push('login');
            }
        },
        created(){
            this.user = this.$store.getters.getStorage;
            window.console.log(this.user);
            //以后会改为token check
            if (this.user) {
                this.isLogin = true;
            } else {
                this.$router.push('login');
            }
        }
    }
</script>

<style>
</style>
