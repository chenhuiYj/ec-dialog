<template>
<input type="button" :value="value" class="ec-button" :class="{'ec-btn-main':type==='main','ec-btn-cancel':type==='cancel','ec-btn-danger':type==='danger','ec-btn-success':type==='success','ec-btn-large':size==='large','ec-btn-small':size==='small'}" @click="doClick"/>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:['type','value','size'],
        computed: {},
        methods: {
            doClick(){
                this.$emit('click');
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss">
    .ec-button{
        box-sizing: border-box;
        border: none;
        font-size: 16px;
        width: 80px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        border-radius: 4px;
        background: none;
        outline: none;
        -webkit-appearance: none;
        &.ec-btn-main{
            background: #09f;
        }
        &.ec-btn-cancel{
            color: #777;
            background: #fff;
            border: 1px solid #999;
        }
        &.ec-btn-danger{
            background: #f00;
        }
        &.ec-btn-success{
            background: #0f0;
        }
        &.ec-btn-large{
            width: 104px;
            height: 40px;
            line-height: 40px;
        }
        &.ec-btn-small{
            width: 64px;
            height: 28px;
            line-height: 28px;
        }
    }
</style>