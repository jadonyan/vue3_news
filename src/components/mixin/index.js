//混入  常用于  定义通用方法和全局变量
const globalMethods = {
    //全局变量
    data(){
        return {
            LANGS:['简体中文', 'English', '繁體中文'],
            ERRORS:{
                404: '页面不存在',
                500: '服务器错误',
                302: '未授权',
                200: 'ok',
                //....
            }
        }
    },
    //通用方法
    methods: {
        //https://element.eleme.cn/#/zh-CN/component/message
        succMsgHint(msg) {
            this.$message({
                message: msg,
                type: 'success'
            });
        },
        warningMsgHint(msg) {
            this.$message({
                message: msg,
                type: 'warning'
            });
        },
        msgHint(msg) {
            this.$message(msg);
        },
        errorMsgHint(msg) {
            this.$message.error(msg);
        },
        //https://element.eleme.cn/#/zh-CN/component/notification
        succMsgNotify(title, msg) {
            this.$notify({
                title: title,
                message: msg,
                type: 'success'
            });
        },
        //.....
        clog(data) {
            window.console.log(data);
        }
    },
}

export { globalMethods }