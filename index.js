require("./index.html");
//引入sass
import Vue from 'vue'
/**
 * @description 启动App
 * @returns {{name: string}}
 * @constructor
 */
import dialog from './src/js/components/index';
Vue.use(dialog)
let App = new Vue({
    el: '#app',
    data(){
        return {
            'name': 'index'
        }
    },
    mounted(){
        this.$confirm({
            title:'提示',
            content:'这里是提示内容'
        }).then(()=>{
            this.name='守候'
            alert(this.name)
        }).catch((err)=>{
            console.log(err)
        })

    }
});