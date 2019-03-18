<template>
  <div class="view">
     <div class="boxTop">
        <div class="viewTop">
          <img src="static/img/vline.png" alt="#"/>
          <h3>视频教程</h3>
        </div>
        <h3>更多</h3>
     </div>
      <div class="viewMiddle" >
        <div class="viewinfo" v-for="(vv,index) in vinfo" :key="index">
          <img :src="vv.img" alt="#"/>
          <p>{{vv.msg}}</p>
        </div>
      </div>
  </div>
</template>

<script>
 export default {
   name:"hoomView",
   data () {
     return {
       vinfo:[
         {
           id:"1",
           img:"static/img/v1.png",
           msg:"裤子秒变裙子"
         },
         {
           id:"2",
           img:"static/img/v2.png",
           msg:"衣服破洞还可以这处理  建议选择和衣服颜色相近的线缝补"
         }
       ]
     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
.view{
  .boxTop{
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    padding-right: .25rem;
    .viewTop{
      // height: .45rem;
      display: flex;
      padding-top: .13rem;
      padding-bottom: .13rem;
      margin-bottom: 2px;

      img{
        width: .04rem;
        height: .18rem;
        padding-left:.07rem;
        padding-right: .05rem;
      }
      h3{
        font-size:14px;
        color: #00baff;
        line-height: 14px;
        font-weight: 100;
      }
    }
    h3{
      font-size:12px;
      color:#6e6e6e;
    }
  }

  .viewMiddle{
    background: white;

    display: flex;
    align-items:center;
    padding:.1rem 0;
    .viewinfo{
      // display: flex;
      margin-left:.14rem;
      width: 1.67rem;
      img{
        width: 1.67rem;
      }
      p{
        font-size:12px;
        padding-left:.07rem;
        padding-right:.07rem;
        text-align: center;
        line-height: .18rem;
        padding:.09rem;
        border:1px solid #999;
      }
    }
  }
}

</style>
