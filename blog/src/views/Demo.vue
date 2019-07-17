<template>
    <div class="container">
        <div class="content">
            <ul class="box">
                <li class="">
                    <div class="card">
                        <img src="../assets/imgs/p1.png" class="pic">
                        <div class="text">
                            <p>demo1</p>
                            <p>jieshao1</p>
                            <a href="Home.vue" target="_blank"></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .content{
        position: relative;
    }
    .card{
        width: 380px;
        height: 380px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 0;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        margin: 0 auto 20px;
        background: linear-gradient(-45deg,#000,#fff);
    }
    .pic{
        width: 390px;
        height: 310px;
        transition: all .3s;
        opacity: .9;
    }
    .card .text{
        color: #fff;
        padding: 30px;
        transition: all .3s;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>