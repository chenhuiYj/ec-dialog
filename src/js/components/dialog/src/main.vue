<template>
    <transition  :name="animation">
        <div class="ec-big" v-if="inShow" :class="[theme]">
            <div class="ec-dialog" @click="close"></div>
            <div class="ec-box">
                <a href="javascript:;" class="ec-close" @click.stop="close"></a>
                <div class="ec-title" v-if="title" :style="{'background':theme?color:'none'}">{{title}}</div>
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
        //props: ['show','title','animation','theme','color'],
        props:{
            show:{
                type: Boolean,
                required: true
            },
            title:{
                type: String,
            },
            animation:{
                type: String,
                default:'ec'
            },
            theme:{
                type: [String,Boolean],
                default:false
            },
            color:{
                type: String,
                default:'#20a0ff'
            }
        },
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
                this.$emit('close')
            }
        }
    }
</script>
<style lang="scss">
    @import "../../../../sass/animation";
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
        .ec-close{
            display: block;
            width: 16px;
            height: 16px;
            background: url("../../../../images/icon-close1.png") no-repeat center;
            background-size: 100%;
            position: absolute;
            top: 20px;
            right: 20px;
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
        &.tips{
            background: rgba(00, 00, 00, .4);
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .ec-box {
                padding: 0;
                overflow: hidden;
            }
            .ec-title {
                height: 50px;
                background: #20a0ff;
                color: #fff;
                line-height: 50px;
                padding-left: 20px;
            }
            .ec-box-buttons {
                padding:0 20px 20px 0;
            }
            .ec-content {
                padding: 14px 20px;
            }
        }
    }
</style>