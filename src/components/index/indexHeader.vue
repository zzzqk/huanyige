<template>
 <!-- <div> -->
   <div class="header">
     <div class="headerTop">
       <img src="../../assets/img/icon_l.png" alt=""/>
       <h3>首页</h3>
       <img src="../../assets/img/icon_r.png" alt=""/>
     </div>
   </div>
 <!-- </div> -->
</template>

<script>
 export default {
   name:"indexHeader",
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
  .header{
      // background: #a1aeb3;
      // width: 100%;
      height:.61rem ;
      background: #00bbff;
    .headerTop{
      height:.3rem ;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:.3rem .1rem 0;
      img{
        width:.27rem;
        height: .3rem;
      }
      h3{
        color:white;
        font-size: .18rem;
      }
    }
  }
</style>
