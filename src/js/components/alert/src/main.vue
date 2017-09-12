<template>
    <transition name="ec">
        <div v-if="show" class="ec">
            <div class="ec-box">
                <div class="ec-box-inner">
                    <div class="ec-title" v-if="title">{{title}}</div>
                    <div class="ec-content">{{content}}</div>
                </div>
                <div class="ec-box-buttons">
                    <span class="ec-btn-success" @click="success">{{submitText}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                name:'ec-alert',
                show: false,
                title: '提示',
                content: '',
                submitText: '确定'
            }
        },
        computed: {},
        mounted () {
        },
        methods: {
            success () {
                this.show = false;
            }
        }
    }
</script>
<style lang="scss" scoped>

    .ec {
        background: rgba(00, 00, 00, .5);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        .ec-box {
            width: 80%;
            max-width: 400px;
            top: 200px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            background: #fff;
            box-sizing: border-box;
            padding: 20px;
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
            padding: 14px 0;
            line-height: 24px;
            color: #48576a;
            font-size: 14px;
        }
        .ec-box-buttons {
            text-align: right;
        }
        .ec-btn-success {
            background: #20a0ff;
            border-color: #20a0ff;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            margin: 0;
            padding: 10px 15px;
            border-radius: 4px;
        }
        .ec-btn-cancel {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #c4c4c4;
            color: #1f2d3d;
            margin: 0;
            padding: 10px 15px;
            border-radius: 4px;
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