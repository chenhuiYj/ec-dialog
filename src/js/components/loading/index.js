import Vue from 'vue'
import LoadingComponent from './src/main.vue'
function merge(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};
let instance;
//extend 是构造一个组件的语法器.传入参数，返回一个组件
let LoadingConstructor = Vue.extend(LoadingComponent);
LoadingConstructor.prototype.close =function () {
    this.show=false;
}

let Loading = (options={}) => {
    //initInstance();
    instance = new LoadingConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
    // 将单个 confirm instance 的配置合并到默认值中
    merge(instance.$data, options);
    instance.show = true;
    return instance;
}
export default Loading;