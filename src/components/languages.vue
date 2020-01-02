<template>
    <div>
        <el-button class="lang_btn float_right" type="text">简体中文</el-button>
        <el-popover
                placement="bottom"
                title=""
                width="200"
                trigger="click"
                content="">
            <el-button slot="reference">简体中文</el-button>
            <slot name="langs"></slot>
        </el-popover>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
</style>
