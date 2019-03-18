<template>
<div class="footer">
  <div class="left1">
    <img src="static/img/ficon.png" alt="#"/><span>衣篓</span>
  </div>
  <p>预约洗衣</p>
</div>
</template>

<script>
 export default {
   name:'sxFooter',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.footer{
  height: .52rem;
  width: 100%;
  background: #fff;
  display: flex;

  .left1{
    color:#08b5ff;
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    img{
      width:.2rem;
      height: .22rem;
    }
    span{
      margin-left:.05rem;
      margin-top:10px;
      font-size: 14px;
    }
  }
  p{
    background: green;
    flex:1;
    color:#fff;
    text-align: center;
    line-height: .52rem;
  }
}

</style>
