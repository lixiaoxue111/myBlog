<template>
  <el-container id="app">
    <c-header :headerList="headerList"></c-header>
    <el-main id="content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <router-view></router-view>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <c-aside></c-aside>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import CHeader from '@/components/Header.vue'
  import CAside from '@/components/Aside.vue'
  export default {
      components:{
          CHeader,
          CAside
      },
      data(){
          return{
              headerList:[
                  {
                      path: '/home',
                      name: '首页',
                      aside:true,
                  },
                  {
                      path: '/article',
                      name: '技术杂谈',
                      aside:true,
                  },
                  {
                      path: '/demo',
                      name: '小Demo',
                      aside:true,
                  },
                  {
                      path: '/treehole',
                      name: '碎语墙',
                      aside:true,
                  },
                  {
                      path: '/informalEssay',
                      name: '生活随笔',
                      aside:true,
                  },
                  {
                      path: '/bookstore',
                      name: '书屋',
                      aside:true,
                  },
                  {
                      path: '/message',
                      name: 'Blog留言',
                      aside:false,
                  },
                  {
                      path: '/aboutme',
                      name: '关于自己',
                      aside:false,
                  },
              ]
          }
      },
      created(){
          let item = this.headerList;
          for(var i=0;i<item.length;i++){
              //console.log(item[i].aside)
          }

      }
  }
</script>
<style>
#app {

}
  #content{
    margin-top: 100px;
  }
</style>
