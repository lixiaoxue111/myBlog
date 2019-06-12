<template>
  <el-main class="container">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item,index) in carouselList" :key="index">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="lasted">
        最新文章
      </div>
      <ul>
        <li class="article">
          <a class="article-title">vim如何重命名文件名</a>
          <div class="article-content">
            之前修改重命名文件名时，总是简单粗暴地删除重建文件，想来vim有木有相关命令可以实现了，
            很遗憾，Vim没有单独重命名命令。不过好在可以自己定义vim命令
            command! -nargs=1 Rename let tpname = expand('%:t') | saveas
          </div>
        </li>
        <li class="article">
          <a class="article-title">linux(centos)登录提示cannot change locale (en_US.UTF-8)解决方案</a>
          <div class="article-content">
            刚才远程登录linux服务器时，突然提示cannot change locale (en_US.UTF-8)警告：-bash: warning:
            setlocale: LC_CTYPE: cannot change locale (en_US.UTF-8): No such file
          </div>
        </li>
        <li class="article">
          <a class="article-title">浅析Dijkstra单源最短路径算法</a>
          <div class="article-content">
            源最短路径问题给定加权有向图G=(V,E,W)，每条边的权值w为非负数，
            表示两个顶点间的距离。源点s∈V。求：从s出发到其他各个顶点的最短路径。
            如上图所示，以1为源点，计算到其余各个顶点的最短距离（我已用红线标出）。
            下面列出了最终解：源点：11->6->2 : short[2] = 51->6->2->3 : short[3] = 121->6->4
            源最短路径问题给定加权有向图G=(V,E,W)，每条边的权值w为非负数，
            表示两个顶点间的距离。源点s∈V。求：从s出发到其他各个顶点的最短路径。
            如上图所示，以1为源点，计算到其余各个顶点的最短距离（我已用红线标出）。
            下面列出了下从最终解：源点：11->6->2 : short[2] = 5
          </div>
        </li>
      </ul>
    </div>
  </el-main>
</template>

<script>
// @ is an alias to /src
export default {
    data(){
      return{
          carouselList:[
              "http://localhost:8080/imgs/carousel1.jpg",
              "http://localhost:8080/imgs/carousel2.jpg",
              "http://localhost:8080/imgs/carousel3.jpg",
              "http://localhost:8080/imgs/carousel5.jpg",
          ]
      }
    }
}
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
  }
  .el-carousel{
    width: 100%;
  }
  .content .lasted{
    border-bottom: 2px solid gold;
    font-size: 25px;
    font-weight: 700;
  }
  .content .article{
    border-bottom:1px solid #ddd;
    padding: 15px 5px;
  }
  .article-title{
    color:orangered;
    font-size: 20px;
    cursor: pointer;
  }
  .article-content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
