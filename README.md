## vue3_news
该项目是临时起意，在简单过一遍vue知识点后，通过阅读文档和资料，尽可能的将知识点串联，加深理解。
- 属于纯前端项目，不涉及后台
- 交互使用mock来模拟后台交互
- 由于没有db，所以未引入注册功能（demo分支，越简单越好）
- 串联了：vue-router, vuex, axios, mockjs, directives, plugins, components等
- 后期会在 master 分支进行真实后台（*待补充地址*）交互，尽情期待

因为只花了一点业余时间学了下，所以没有太复杂，对于新手来说是个不错的练习项目。
如果喜欢请点个star支持下~ 感谢~

## 开发技术 
~~~
"axios": "^0.19.0",
"core-js": "^3.4.4",
"element-ui": "^2.13.0",
"mockjs": "^1.1.0",
"vue": "^2.6.10",
"vue-router": "^3.1.3",
"vuex": "^3.1.2"
~~~
## 目录结构
~~~bash
.
├── public
│   ├── favicon.ico                     # 默认生成文件 
│   ├── index.html                      # 默认生成文件
├── src
│   ├── App.vue                         # 组件入口
│   ├── main.js                         # 程序入口
│   ├── assets                          # 资源目录
│   │   └── logo.png                    # 应用logo 
│   ├── components                      # 实践——组件
│   │   ├── mixin                       # 实践——混入
│   │   │   └── index.js
│   │   ├── create_book.vue             # 图书创建
│   │   ├── header.vue                  # header栏
│   │   ├── languages.vue               # 多语种切换组件
│   │   ├── logo.vue                    # 应用logo组件
│   │   ├── main.vue                    # 网站主体组件
│   │   ├── menu.vue                    # 左侧菜单栏组件
│   │   └── userinfo.vue                # 用户信息组件
│   ├── directive                       # 实践——自定义指令
│   │   └── validate.js
│   ├── mock                            # mockjs模拟请求响应
│   │   └── mock.js
│   ├── page                            # 网站各个页面
│   │   ├── abroad
│   │   │   └── index.vue
│   │   ├── home
│   │   │   └── index.vue
│   │   ├── login
│   │   │   └── index.vue
│   │   └── manage
│   │       └── create.vue
│   ├── plugins
│   │   └── toast                       # 实践——插件
│   │       └── index.css
│   │       └── index.js
│   ├── router                          # 实践——路由
│   │   └── index.js
│   └── store                           # 实践——vuex状态管理
│       └── index.js
└── vue.config.js                       # vue-cli 配置文件
~~~

## 功能清单
- [√] 登陆及注销
- [√] 登陆检测跳转
- [√] vuex管理登陆状态
- [√] 自定义toast插件
- [√] 自定义指令v-valid
- [√] mockjs拦截网络请求，模拟返回数据
- [√] 组件间数据传递-分页
- [ ] 多语种切换
- [ ] 表格数据搜索过滤

----
## 启动程序
~~~bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run serve
~~~
----
