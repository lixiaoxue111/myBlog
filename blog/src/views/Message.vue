<template>
    <el-main>
        <!--<el-row :gutter="20">
            <el-col :span="16"><div class="grid-content">
                jj
            </div></el-col>
            <el-col :span="8"><div class="grid-content">
                <aside></aside>
            </div></el-col>
        </el-row>-->
        <aside></aside>
    </el-main>
</template>

<script>
    import aside from '@/components/Aside.vue'
    export default {
        comments:{
            aside
        }
    }
</script>

<style scoped>

</style>