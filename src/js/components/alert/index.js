import Vue from 'vue'
import AlertComponent from './src/main.vue'
//合并对象函数，这个方法是会改变，第一个参数的值的
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
let AlertConstructor = Vue.extend(AlertComponent);

let initInstance = ()=>{
    //实例化ConfirmConstructor组件
    instance = new AlertConstructor({
        el: document.createElement('div')
    });
    //添加到boby
    document.body.appendChild(instance.$el);
}

let Alert = (options={}) => {
    //初始化
    initInstance();
    // 将单个 confirm instance 的配置合并到默认值（instance.$data，就是main.vue里面的data）中
    merge(instance.$data, options);
    //返回Promise
    return new Promise((resolve, reject)=>{
        instance.show = true;
        let success = instance.success;
        let cancel = instance.cancel;
        instance.success = () => {
            //先执行instance.success（main.vue里面的success函数）
            success();
            //再执行自定义函数
            resolve('ok');
        }
    });

}
export default Alert;