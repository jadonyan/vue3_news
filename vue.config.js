module.exports = {
    runtimeCompiler: true,
    devServer: {
        open: false,        //浏览器自动打开页面
        host: "0.0.0.0",    //如果是真机测试，就使用这个IP
        port: 8080,
        https: false,
        hotOnly: false,     //热更新（webpack已实现了，这里false即可）
    }
}