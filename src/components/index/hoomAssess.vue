<template>
<div class="hoomAssess">
    <div class="boxTop">
      <div class="viewTop">
        <img src="static/img/vline.png" alt="#"/>
        <h3>评价</h3>
      </div>
      <h3></h3>
    </div>
    <div class="info" v-for="(item,index) in msg" :key="index">
      <div class="infohead">
        <img :src="item.image" alt="#"/><span>{{item.tel}}</span>
      </div>
      <div class="infomm"><span>{{item.time}}</span><span>{{item.zt[1]}}</span></div>
      <p>{{item.msgp}}</p>
    </div>
</div>
</template>

<script>
 export default {
   name:"hoomAssess",
   data () {
     return {
       msg:[
         {
           id:"1",
           image:"static/img/t1.png",
           tel:"13384902806",
           time:"2018-12-22",
           zt:["洗衣", "烘干", "洗鞋子","保养皮具"],
           msgp:"效果很好，满意"

         },
         {
           id:"2",
           image:"static/img/t2.png",
           tel:"13384902777",
           time:"2018-12-23",
           zt:["洗衣", "烘干", "洗鞋子","保养皮具"],
           msgp:"效果很好，满意"
         },
         {
           id:"3",
           image:"static/img/t3.png",
           tel:"13384902888",
           time:"2018-12-24",
           zt:["洗衣", "烘干", "洗鞋子","保养皮具"],
           msgp:"效果很好，满意"
         },
       ]
     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
.hoomAssess{
  .boxTop{
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    padding-right: .25rem;
    // margin-bottom: .07rem;
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
  .info{
    padding-left:.15rem;
    background: white;
    border-top:1px solid #d3d3d3;
    padding-top:.1rem;
    padding-bottom: .14rem;
    .infohead{
      display: flex;
      align-items: center;
      img{
        width: .31rem;
        height: .32rem;
        margin-right: .05rem;

      }
      span{
        font-size: 12px;
      }
    }
    .infomm{
      font-size:10px;
      color:#999;
      margin:.07rem 0;
      span{
          margin-right: .1rem;
      }
    }
    p{
      font-size:12px;
    }
  }
}
</style>
