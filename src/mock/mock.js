var Mock = require('mockjs')

const presslist=['人民日报',"今日头条","新浪新闻","其他"]
Mock.mock("http://www.location.com/news/list","get",{
    "newslist|10": [
        {"news_id|+1":101,"news_title":"@ctitle",
            "news_press|1":presslist,"news_time":"@date('yyyy-MM-dd HH:mm:ss')"
        }
    ]
});

Mock.mock("http://www.location.com/login","post",{
    "isLogin": true
});
