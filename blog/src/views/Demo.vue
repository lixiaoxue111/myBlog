<template>
    <div class="container">
        <div class="content">
            <div class="card">
                <img src="../assets/imgs/p1.png" class="pic">
                <div class="text">
                    <p class="title">kkddddkkkkkkk</p>
                    <p class="gist">kkkkkk kkkk kkkkk kkkkkk kkk</p>
                    <a href="Home.vue" target="_blank" class="view" onfocus="this.blur();"></a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/imgs/p1.png" class="pic">
                <div class="text">
                    <p class="title">kkddddkkkkkkk</p>
                    <p class="gist">网上有很多关于Flex的教程，对于Flex的叫法也不一，其实这两种叫法都没有错，</p>
                    <a href="Home.vue" target="_blank" class="view" onfocus="this.blur();"></a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/imgs/p1.png" class="pic">
                <div class="text">
                    <p class="title">kkddddkkkkkkk</p>
                    <p class="gist">kkkkkk kkkk kkkkk kkkkkk kkk</p>
                    <a href="Home.vue" target="_blank" class="view" onfocus="this.blur();"></a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/imgs/p1.png" class="pic">
                <div class="text">
                    <p class="title">kkddddkkkkkkk</p>
                    <p class="gist">kkkkkk kkkk kkkkk kkkkkk kkk</p>
                    <a href="Home.vue" target="_blank" class="view" onfocus="this.blur();"></a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/imgs/p1.png" class="pic">
                <div class="text">
                    <p class="title">kkddddkkkkkkk</p>
                    <p class="gist">kkkkkk kkkk kkkkk kkkkkk kkk</p>
                    <a href="Home.vue" target="_blank" class="view" onfocus="this.blur();"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .content{
        display: flex;
        justify-content:center;
        flex-flow: wrap;
        padding: 0 16%;
    }
    .card{
        position: relative;
        width: 30%;
        margin: 0 35px 35px 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        overflow: hidden;
    }
    .card:hover .text:before{
        opacity: 1;
        transform: scaleX(1);
    }
    .card:hover .pic{
        opacity: .6;
    }
    .card:hover .pic,.card:hover .text{
        transform: translate3d(-10px,-10px,0);
    }
    .card:hover .title{
        transform: translate3d(5px,5px,0);
    }
    .card:hover .gist{
        opacity: 1;
        transform: translateZ(0)
    }
    .card img{
        width: 390px;
        height: 310px;
        transition: all .3s;
        opacity: .9;
        overflow: hidden;
    }
    .text{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        color: #fff;
        padding: 30px;
        transition: all .3s;
    }
    .text:before{
        position: absolute;
        right: -60px;
        bottom: -60px;
        width: 250px;
        height: 250px;
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 900px hsla(0,0%,100%,.2);
        content: "";
        opacity: 0;
        transition: all .3s;
        transform: scale3d(.5,.5,1);
        transform-origin: 50% 50%
    }
    .title{
        text-align: center;
        font-size: 28px;
        transition: all .3s;
    }
    .gist{
        position: absolute;
        bottom: 30px;
        right: 20px;
        transform: translate3d(20px,20px,0);
        transition: all .3s;
        width: 140px;
        padding: 0 10px 10px 0;
        opacity: 0;
    }
    .view{
        padding: 30px;
        transition: all .3s;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>