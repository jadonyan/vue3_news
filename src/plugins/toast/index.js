/**
 * 自定义 提示框( Toast )组件
 */

var Toast = {};
var showToast = false, // 存储toast显示状态
    toastVM = null; // 存储toast vm

Toast.install = function (Vue, options) {
    //默认配置项
    var opt = {
        location: 'bottom',   //bottom   top    center
        duration: 2500,
        wordWrap: false
    };
    for (var property in options) {
        opt[property] = options[property];
    }

    Vue.prototype.$toast = function(tips, loc) {

        var curType = loc ? loc : opt.location;
        var wordWrap = opt.wordWrap ? 'lx-word-wrap' : '';
        var style = opt.width ? 'style="width: ' + opt.width + '"' : '';
        var tmp = '<div v-show="show" :class="type" class="lx-toast ' + wordWrap + '" ' + style + '>{{tip}}</div>';

        if (showToast) {
            // 如果toast还在，则不再执行
            return;
        }
        if(!toastVM){
            var toastTpl = Vue.extend({
                data: function () {
                    return {
                        show: showToast,
                        tip: tips,
                        type: 'lx-toast-' + curType
                    }
                },
                template: tmp
            });
            toastVM = new toastTpl();
            var tpl = toastVM.$mount().$el;
            document.body.appendChild(tpl);
        }
        toastVM.type = 'lx-toast-' + curType;
        toastVM.tip = tips;
        toastVM.show = showToast = true;

        setTimeout(function () {
            toastVM.show = showToast = false;
        }, opt.duration)
    }
}

module.exports = Toast;
