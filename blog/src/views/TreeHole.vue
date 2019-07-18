<template>
    <el-main class="main">
        <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content">
                    <div class="bar clearix">
                        <h3>碎语墙</h3>
                        <span>
                            <router-link to="/home">返回首页&gt&gt</router-link>
                         </span>
                    </div>
                    <div class="content">
                        <ul class="content-box">
                            <li>
                                <i class="el-icon-date"></i>
                                <span>2019-05-01</span>
                                <div>冥冥中该来则来，无处可逃</div>
                            </li>
                            <li>
                                <i class="el-icon-date"></i>
                                <span>2019-05-01</span>
                                <div>长大成人后，我们学会客观地审视自己的父母，就会发现他们不过是普通人，与他人并没有什么不同。当然，这里的普通既有褒义，也有贬义。当自己的年龄超过记忆中的父母时，这种感受尤其强烈。</div>
                            </li>


                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
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
                                <li>11111111111111</li>
                                <li>222222222</li>
                                <li>333333333333333333333</li>
                                <li>4444444444</li>
                                <li>55555555555555</li>
                            </ul>
                        </div>
                    </el-aside>
                </div>
            </el-col>
        </el-row>

    </el-main>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import aside from '@/components/Aside.vue'
    export default {
        comments:{
            aside:aside
        },
        data(){
            return {
                treeList:[]
            }
        },
        created(){
            let treeListUrl = url.getTreeList;
           /* axios.get(treeListUrl).then(res=>{
                console.log(111);

            })*/
            axios.get(treeListUrl).then(res => {
                console.log(res);
               // this.treeList = res.data;
            })
        }
    }
</script>

<style scoped>
    .cleafix{
        content: '';
        clear: both;
        display: block;
    }
    .bar{
        border-bottom: 2px solid darkseagreen;
        margin-top: -20px;
    }
    .bar h3{
        float: left;
        font-weight: 600;
    }
    .bar span{
        float: right;
        padding-top: 7px;
    }
    .bar span a{
        outline: none;
    }
    .content-box{
        margin: 20px 0;
    }
    .content-box li{
        margin: 10px 0;
        border: 1px solid #cccccc;
        padding: 30px 20px;
        background: beige;
    }
    /* aside  start */
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
    /* aside  end */
</style>