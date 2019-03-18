<template>
<div class="hoomFooter">
  <div class="footer" v-for="(item,index) in footpic" :key="index">
    <img :src="item.images" alt="#"/>
    <span :style="item.color">{{item.msg}}</span>
  </div>
</div>
</template>

<script>
 export default {
   name:"hoomFooter",
   data () {
     return {
       footpic:[
         {
           id:"1",
           images:"static/img/f1.png",
           msg:"首页",
           color:"color:#00bbff"
         },
         {
           id:"2",
           images:"static/img/f2.png",
           msg:"速洗",
           color:"color:#f98b18"
         },
         {
           id:"3",
           images:"static/img/f3.png",
           msg:"我的",
           color:"color:#929292"
         },
       ]
     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
.hoomFooter{
  background: #f7f7f7;
//height: .52rem;
  display: flex;
  padding-top:.07rem;
  padding-bottom: .07rem;
  justify-content: space-around;
  .footer{
    // flex:1;

    img{
      display: block;
      width:.31rem ;
      height: .25rem;
      margin:0 auto;
    }
    span{
      display: block;
      font-size: 12px;
      text-align: center;
      line-height: 12px;
      margin-top:.05rem;
    }
  }
}

</style>
