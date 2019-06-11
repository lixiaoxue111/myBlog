<template>
    <el-aside class="box">
        <ul class="navigation">
            <li>
                <router-link to="/aboutme">关于博主</router-link>
            </li>
            <li>
                <router-link to="/home">博客首页</router-link>
            </li>
            <li>
                <router-link to="/article">技术杂谈</router-link>
            </li>
            <li>
                <router-link to="/informalEssay">生活随笔</router-link>
            </li>
            <li>
                <router-link to="treehole">碎语墙</router-link>
            </li>
            <li>
                <router-link to="bookstore">关于书屋</router-link>
            </li>
        </ul>
        <div class="newArticle">
            <h3 class="newA">最新文章</h3>
            <ul>
                <li>1111</li>
                <li>222222222</li>
                <li>333333333333333333333</li>
                <li>4444444444</li>
                <li>55555555555555</li>
            </ul>
        </div>
    </el-aside>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .box{
        width: 100% !important;
    }
    .navigation{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .navigation li{
        flex-basis: 30%;
        text-align: center;
        border: 1px solid;
        padding: 30px 0;
    }
    .navigation li a{
        outline: none;
        color: black;
    }
    .navigation li a.router-link-active{
        color: dodgerblue;
    }
    .navigation li:nth-of-type(1){
        border-color: yellowgreen;
    }
    .navigation li:nth-of-type(1){
        border-color: yellowgreen;
    }
    .navigation li:nth-of-type(2){
        border-color: chocolate;
    }
    .navigation li:nth-of-type(3){
        border-color: plum;
    }
    .navigation li:nth-of-type(4){
        border-color: pink;
    }
    .navigation li:nth-of-type(5){
          border-color: dodgerblue;
      }
    .navigation li:nth-of-type(6){
        border-color: goldenrod;
    }
    .newArticle{
        margin-top: 50px;
    }
    .newArticle .newA{
        border-bottom: 1px solid lightpink;
        margin-bottom: 20px;
        padding-bottom: 5px;
    }
    .newArticle li{
        list-style-type: disc;
        font-size: 16px;
    }
</style>