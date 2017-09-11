import comfirm from './comfirm/index.js'

const install = function(Vue) {
    Vue.component(comfirm.name, comfirm)
    Vue.prototype.$confirm = comfirm
}
export default install