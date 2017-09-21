<template>
    <transition name="ec">
        <div class="ec-big" v-if="inShow">
            <div class="ec-dialog" @click="close"></div>
            <div class="ec-box">
                <div class="ec-title" v-if="title">{{title}}</div>
                <div class="ec-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                inShow:false,
                name: 'ec-dialog',
            }
        },
        computed: {},
        props: ['show','title'],
        watch:{
            show(val){
                this.inShow=val;
            }
        },
        mounted () {
            this.inShow=this.show;
        },
        methods: {
            close(){
                this.inShow = false;
            }
        }
    }
</script>
<style lang="scss">
    .ec-big{
        .ec-dialog {
            background: rgba(00, 00, 00, .4);
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            touch-action: none;
        }
        .ec-box {
            width: 80%;
            top: 100px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            background: #fff;
            box-sizing: border-box;
            padding: 20px 20px 10px 20px;
            border-radius: 6px;

        }
        .ec-title {
            padding-left: 0;
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 700;
            height: 18px;
            color: #333;
        }
        .ec-content {
            padding-top: 14px;
            line-height: 24px;
            color: #48576a;
            font-size: 14px;
            overflow-x: auto;
        }
    }

    .ec-enter {
        opacity: 0;
        .ec-box {
            transform: scale(0);
        }
    }

    .ec-enter-active {
        transition: opacity .4s;
        .ec-box {
            transition: transform .4s;
        }
    }

    .ec-leave-active {
        transition: opacity .2s;
        .ec-box {
            transition: transform .2s;
        }
    }

    .ec-leave-active {
        opacity: 0;
    }
</style>