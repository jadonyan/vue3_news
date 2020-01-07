module.exports = {
    'valid': {
        bind(el, binding) {
            //容错机制
            if (el.tagName.toLocaleLowerCase() !== 'input') {
                el = el.getElementsByTagName('input')[0];
            }
            // 所有需要验证的组成一个列表
            let regList = [{
                "type": "phone",
                "RegExp": /^1[345679]\d{9}$/,
                "msg": "手机需要11位数字"
            }, {
                "type": "pwd",
                "RegExp": /\w{6,9}/,
                "msg": "密码长度不正确"
            }, {
                "type": "code",
                "RegExp": /\d{4}/,
                "msg": "验证错误"
            }];

            let options = {
                triggEvent: 'blur',
                errorClass: 'vaild-error',
            };

            // el:dom节点 binding:对象（可使用value）
            el.addEventListener(options.triggEvent, function(e){
                let inputVal = e.target.value;
                let validObj = regList.find((item)=>item.type === binding.value);

                if(validObj.RegExp.test(inputVal)){
                    //验证通过
                    e.target.classList.remove(options.errorClass);
                } else {
                    //验证不通过
                    //window.console.log(validObj.msg);
                    //this.$toast(validObj.msg, 'top');
                    // alert(validObj.msg);
                    e.target.classList.add(options.errorClass);
                }
            })
        }
    }
}