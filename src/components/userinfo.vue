<template>
    <div class="userinfo_div">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                {{user.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        props:[
            'user'
        ],
        methods:{
            logout(){
                this.$store.commit('$_removeStorage');
                this.$message({
                    message: this.user.username + '注销成功',
                    type: 'success'
                });
                this.$router.push('login');
            },
            handleCommand(command){
                switch(command){
                    case 'profile':
                        this.$message({
                            message: '个人信息完善中',
                            type: 'success'
                        });
                        break;
                    case 'logout':
                        this.logout();
                        break;
                }
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
    .userinfo_div{
        margin-right: 20px;
        float: right;
    }
</style>