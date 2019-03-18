<template>
<div class="buyCenter">
      <div class="boxTop">
        <div class="viewTop">
          <img src="static/img/vline.png" alt="#"/>
          <h3>购物中心</h3>
        </div>
        <h3>更多</h3>
      </div>
      <div class="content" v-for="(item,index) in information" :key="index">
        <h3>{{item.tit}}</h3>
      </div>
</div>
</template>

<script>
 export default {
   name:"buyCenter",
   data () {
     return {
        information:[
          {
            id:"1",
            tit:"精品推荐",
            msg:[0,1,2,3,4,5,6,],
          },
          {
            id:"2",
            tit:"热门推荐",
            msg:[0,1,2,3,4,5,6,],
          }
        ]
     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
.buyCenter{
  margin-top:.1rem;
  .boxTop{
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    padding-right: .25rem;
    margin-bottom: .07rem;
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
  .content{
    height: .81rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .07rem;

    h3{
      font-size: .16rem;
      font-weight: 100;
      color:#02b3ff;
      border-bottom: 2px solid #02b3ff;
      padding-left:.2rem;
      padding-right: .2rem;
      line-height: .16rem;
      padding-bottom: .08rem;
    }
  }
}

</style>
