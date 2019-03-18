<template>
<section>
  <div class="tit">
    <h3>教程</h3>
  </div>
  <div class="info">
    <div class="infolist" v-for="(item,index) in data" :key="index">
      <img :src="item.imgs" alt="#"/>
      <span>{{item.p}}</span>
    </div>
    <!-- <div class="infolist">
      <img src="static/img/view01.png" alt="#"/>
      <span>羽绒服局部快速清洗</span>
    </div>
    <div class="infolist">
      <img src="static/img/view01.png" alt="#"/>
      <span>羽绒服局部快速清洗</span>
    </div>
    <div class="infolist">
      <img src="static/img/view01.png" alt="#"/>
      <span>羽绒服局部快速清洗</span>
    </div> -->
  </div>
</section>
</template>

<script>
 export default {
   props:["data"],
   name:'viewContent',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
section{
  padding:0 .14rem;
  .tit{
    height: .62rem;
    line-height: .62rem;
    color:#999;
  }
  .info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .infolist{
      width: 1.69rem;
      height: 1.59rem;
      img{
        width: 1.69rem;
        height: 1.25rem;
      }
      span{
        display: block;
        text-align: center;
        margin-top:.07rem;
      }
    }
  }
}

</style>
