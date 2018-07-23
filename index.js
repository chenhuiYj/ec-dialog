require("./index.html");
//引入sass
require("./src/sass/index.scss");
require("./src/sass/com.scss");
import Vue from 'vue'
import dialog from './src/js/components/index';
Vue.use(dialog);
let App = new Vue({
    el: '#app',
    data(){
        return {
            'name': 'index',
            show:false
        }
    },
    methods:{
        close(){
            alert('close');
            this.show=false;
        },
        submit(){
            alert('submit');
            this.show=false;
        }
    },
    mounted(){
        //console.log(dialog)
        // this.$ec_confirm({
        //     title:'提示',
        //     content:'这里是提示内容',
        //     submitText:'提交',
        //     cancelText:'返回'
        // }).then(()=>{
        //     this.name='守候'
        //     alert(this.name);
        // }).catch((err)=>{
        // })

        this.$ec_alert({
                title:'提示2',
                content:'这里是提示内容2',
                color:'#f33',
                theme:'tips',
                animation:'left-bounce'
            }).then(()=>{
                this.name='守候'
                alert(this.name)
        })
        // this.$ec_tips({
        //     content:'点赞成功'
        // })
        // let loadingContent = this.$ec_loading({
        //     content: '玩命加载中'
        // });
        //console.log(loadingContent)
        //setTimeout(()=>{loadingContent.close();},2000)
    }
});