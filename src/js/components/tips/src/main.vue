<template>
    <transition name="ec">
        <div v-if="show" class="ec-tips" @click="close">
            <div class="ec-box">
                <div class="ec-box-inner">
                    <div class="ec-content">{{content}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                name:'ec-tips',
                show: false,
                content: '提示',
                type:'',
                time:2000
            }
        },

        computed: {},
        mounted () {
            setTimeout(()=>{
                this.close();
            },this.time)
        },
        methods: {
            close(){
                this.show=false;
            }
        }
    }
</script>
<style lang="scss">
    .ec-tips {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        .ec-box {
            width: 80%;
            max-width: 200px;
            top: 200px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            box-sizing: border-box;
            padding: 10px;
            border-radius: 6px;
            background: rgba(00,00,00,.6);

        }
        .ec-content {
            line-height: 24px;
            text-align: center;
            color: #fff;
            font-size: 14px;
        }
    }
    .ec-enter {
        opacity: 0;
        .ec-box {
            transform:scale(0);
        }
    }

    .ec-enter-active {
        transition: opacity .4s;
        .ec-box {
            transition: transform .4s;
        }
    }
    .ec-leave-active{
        transition: opacity .2s;
        .ec-box {
            transition: transform .2s;
        }
    }
    .ec-leave-active {
        opacity: 0;
    }
</style>