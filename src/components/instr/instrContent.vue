<template>
<section>
  <div class="info" v-for="(item,index) in data" :key="index">
    <h3>{{item.tit}}</h3>
    <p> {{item.p}}</p>
  </div>
   <!-- <div class="info">
    <h3>浣衣阁服务</h3>
    <p>
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
      浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务浣衣阁服务
    </p>
  </div> -->
</section>
</template>

<script>
 export default {
   props:["data"],
   name:'instrContent',
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   updated () {

   }
 }
</script>

<style lang='scss' scoped>

section{
  padding:0 .14rem 0 .14rem;
  .info{
    background: white;
    border-radius: .13rem;
    margin-top:.15rem;
    padding-bottom:.14rem;

    h3{
      height: .68rem;
      padding-left: .22rem;
      border-bottom:1px solid #999;
      line-height: .68rem;
    }
    p{
      line-height: .31rem;
      padding:.14rem .33rem .03rem .22rem;
    }
  }
}
</style>
