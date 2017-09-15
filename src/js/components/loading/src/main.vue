<template>
    <transition name="ec">
        <div v-if="show" class="ec-loading">
            <div class="ec-box">
                <div class="ec-box-inner">
                    <div class="ec-animate">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
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
                name:'ec-loading',
                show: false,
                title: '提示',
                content: '',
                submitText: '确定',
                cancelText: '取消'
            }
        },
        computed: {},
        mounted () {
        },
        methods: {
            close(){
                this.show=false;
            }
        }
    }
</script>
<style lang="scss">
    @keyframes loading-base {
        from {
            opacity: 1;
        }
        to{
            opacity: .3;
        }
    }

    .ec-loading {
        background: rgba(00, 00, 00, .4);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        .ec-box {
            width: 80%;
            max-width: 400px;
            top: 200px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            box-sizing: border-box;
            padding: 20px;
            border-radius: 6px;

        }
        .ec-animate{
            font-size: 0;
            text-align: center;
            span{
                display: inline-block;
                vertical-align: top;
                margin: 0 5px;
                width: 10px;
                height: 10px;
                border-radius: 100%;
                background: #fff;
                -webkit-animation: loading-base .5s infinite;
                &:nth-of-type(1){
                    animation-delay: .1s;
                }
                &:nth-of-type(2){
                    animation-delay: .2s;
                }
                &:nth-of-type(3){
                    animation-delay: .3s;
                }
                &:nth-of-type(4){
                    animation-delay: .4s;
                }
            }
        }
        .ec-content {
            text-align: center;
            padding: 14px 0;
            line-height: 24px;
            font-size: 16px;
            color: #fff;
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