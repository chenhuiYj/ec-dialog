import comfirm from './comfirm/index.js'
import alert from './alert/index.js'

const install = function(Vue) {
    //注册全局组件
    Vue.component(comfirm.name, comfirm)
    Vue.component(alert.name, alert)
    //添加全局API
    Vue.prototype.$confirm = comfirm
    Vue.prototype.$alert = alert
}
export default install