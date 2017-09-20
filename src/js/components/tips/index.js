import Vue from 'vue'
import ConfirmComponent from './src/main.vue'
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
let ConfirmConstructor = Vue.extend(ConfirmComponent);

let initInstance = ()=>{
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

let Tips = (options={}) => {
    initInstance();
    // 将单个 confirm instance 的配置合并到默认值中
    merge(instance.$data, options);
    return new Promise((resolve, reject)=>{
        instance.show = true;
        let success = instance.success;
        let cancel = instance.cancel;
        // event
        instance.success = () => {
            success();
            resolve('ok');
        }
        instance.cancel = () => {
            cancel();
            reject('cancel');
        }
    });

}
export default Tips;