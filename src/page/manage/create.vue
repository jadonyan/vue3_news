<template>
    <div>
        <Header></Header>
        <el-container style="height: 850px; border: 0">
            <Menu></Menu>
            <CreateBook></CreateBook>
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Menu from '@/components/menu.vue'
    import CreateBook from '@/components/create_book.vue'

    export default {
        components:{
            Header,Menu,CreateBook
        },
    }
</script>

<style>
</style>