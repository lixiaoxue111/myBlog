<template>
  <el-main class="container">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item,index) in carouselList" :key="index">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
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
</style>
