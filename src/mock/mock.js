var Mock = require('mockjs')

//登陆模块
Mock.mock("http://www.location.com/login","post",{
    "isLogin": true
});

//数据模块
const presslist=['人民日报出版社', '人民邮电出版社', '清华大学出版社', '机械工业出版社', '电子工业出版社']
const booksData = Mock.mock({
    "bookslist|50": [
        {"book_id|+1":101,"book_title":"@ctitle",
            "book_press|1":presslist,"book_time":"@date('yyyy-MM-dd HH:mm:ss')"
        }
    ],
    "totalCount":50
});
Mock.mock(new RegExp("http://www.location.com/books/list.*"), "get", (options) => {
    const page = GET("page",options.url,1),pagesize=GET("size",options.url,10);
    return getDataByPage(page,pagesize,booksData,"bookslist")
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
Mock.mock("http://www.location.com/books/all","get", booksData);


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
