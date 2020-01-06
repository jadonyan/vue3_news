var Mock = require('mockjs')

//登陆模块
Mock.mock("http://www.location.com/login","post",{
    "isLogin": true
});

//数据模块
const presslist=['人民日报',"今日头条","新浪新闻","其他"]
const newsData = Mock.mock({
    "newslist|50": [
        {"news_id|+1":101,"news_title":"@ctitle",
            "news_press|1":presslist,"news_time":"@date('yyyy-MM-dd HH:mm:ss')"
        }
    ],
    "totalCount":50
});
Mock.mock(new RegExp("http://www.location.com/news/list.*"), "get", (options) => {
    const page = GET("page",options.url,1),pagesize=GET("size",options.url,10);
    return getDataByPage(page,pagesize,newsData,"newslist")
})
//根据页码 页尺寸 来过滤数据
function getDataByPage(page, pagesize, data, key) {
    const start=(page-1)*pagesize;
    const end=page*pagesize>data[key].length?data[key].length:page*pagesize;
    let result=[];
    for(let i=start;i<end;i++){
        result.push(data[key][i]);
    }
    const ret={};
    ret[key]=result;
    ret["totalCount"]=data.totalCount;
    return ret;
}

//获取所有数据，假分页
Mock.mock("http://www.location.com/news/all","get", newsData);


/**
 * @return {string}
 */
function GET(paramName,url,defValue) {
    const arrObj = url.split("?");
    if (arrObj.length > 1) {
        const arrPara = arrObj[1].split("&");
        let arr;
        for (let i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr !== null && arr[0] === paramName) {
                return arr[1];
            }
        }
    }
    return defValue;
}
