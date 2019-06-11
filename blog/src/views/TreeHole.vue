<template>
    <el-main class="main">
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
    </el-main>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    export default {
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
</style>