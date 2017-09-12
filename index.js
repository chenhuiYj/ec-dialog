require("./index.html");
//引入sass
require("./src/sass/com.scss");
import Vue from 'vue'
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
            content:'这里是提示内容',
            submitText:'提交',
            cancelText:'返回'
        }).then(()=>{
            this.$alert({
                title:'提示2',
                content:'这里是提示内容2'
            }).then(()=>{
                this.name='守候'
                alert(this.name)
            })
        }).catch((err)=>{
            alert(err)
        })

    }
});