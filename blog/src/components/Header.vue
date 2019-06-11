<template>
    <el-header class="container">
        <ul>
            <li v-for="(item,index) in headerList" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </el-header>
</template>

<script>
    export default {
        props:["headerList"]
    }
</script>

<style scoped>
    .container{
        height: 100px;
        background: lightpink;
        font-size: 23px;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }
    .container ul{
        display: flex;
        height: 100%;
        align-items: center;
    }
    .container li{
        flex: 1;
        text-align: center;
    }
    li a{
        outline: none;
        color: #000;
    }
    li a.router-link-active{
        color: dodgerblue;
    }
</style>