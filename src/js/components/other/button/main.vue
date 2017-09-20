<template>
<input type="button" :value="value" class="ec-button" :class="{'ec-btn-main':type==='main','ec-btn-cancel':type==='cancel','ec-btn-danger':type==='danger','ec-btn-success':type==='success'}" @click="doClick"/>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:['type','value'],
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
        &.ec-btn-main{
            background: #09f;
        }
        &.ec-btn-cancel{
            color: #333;
            background: #fff;
            border: 1px solid #333;
        }
        &.ec-btn-danger{
            background: #f00;
        }
        &.ec-btn-success{
            background: #0f0;
        }
    }
</style>