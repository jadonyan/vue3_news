<template>
    <div class="logo_div">
        <img alt="Vue logo" src="../assets/logo.png">
        <slot name="app_name"></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .logo_div {
        float: left;
        margin-left: 20px;
    }
    .logo_div img {
        margin-top: 15px;
        margin-right: 15px;
        width: 25px;
        float: left;
    }
    .app_name{
        color: #fff;
    }
</style>