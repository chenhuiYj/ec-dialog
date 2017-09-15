import confirm from './confirm/index.js'
import alert from './alert/index.js'
import tips from './tips/index.js'
import loading from './loading/index.js'

const install = function(Vue) {
    //注册全局组件
    Vue.component(confirm.name, confirm)
    Vue.component(alert.name, alert)
    Vue.component(tips.name, tips)
    Vue.component(loading.name, loading)
    //添加全局API
    Vue.prototype.$ec_confirm = confirm
    Vue.prototype.$ec_alert = alert
    Vue.prototype.$ec_tips = tips
    Vue.prototype.$ec_loading = loading
}
export default install