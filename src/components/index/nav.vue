<template>
<div class="nav">
  <div class="navTop">
      <img src="static/img/vline.png" alt="#"/>
      <h3>专业洗护</h3>
  </div>
  <div class="navBottom" v-if="navinfo.length">
    <div class="navOnly" v-for="(item,index) in navinfo" :key="index" >
      <img :src="item.image" alt="#"/>
      <span :value="item.msg">{{item.msg}}</span>
    </div>
  </div>
  <div class="foot" v-for="(nn,index) in foot" :key="index">
    <img :src="nn.imgg" alt="#"/>
  </div>
</div>
</template>

<script>
 export default {
   name:"Navigator",
   data () {
     return {
       navinfo:[
                {
                  id:"01",
                  image:"static/img/n1.png",
                  msg:"服装类"
                },
                {
                  id:"02",
                  image:"static/img/n2.png",
                  msg:" 鞋类"
                },
                {
                  id:"03",
                  image:"static/img/n3.png",
                  msg:"皮具养护"
                },
                {
                  id:"04",
                  image:"static/img/n4.png",
                  msg:"床上用品"
                },
                {
                  id:"05",
                  image:"static/img/n5.png",
                  msg:"申请跑腿"
                },
                {
                  id:"06",
                  image:"static/img/n6.png",
                  msg:"修补类"
                },
                {
                  id:"07",
                  image:"static/img/n7.png",
                  msg:"服务介绍"
                },
                {
                  id:"08",
                  image:"static/img/n8.png",
                  msg:"团体洗"
                }
              ],
        foot:[
          {imgg:"static/img/fuli.png"}
        ]
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.nav{
  // background: pink;
  height: 3.81rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  margin:.1rem 0;
  .navTop{
    background: white;
    // height: .45rem;
    display: flex;
    padding-top: .13rem;
    padding-bottom: .13rem;
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
    }
  }
  .navBottom{
    height: 1.79rem;
    background: white;
    display: flex;
    flex-wrap: wrap;
    margin-top:2px;
    .navOnly{
      padding-top:.1rem;
      width: 25%;
      img{
        width: .46rem;
        height: .45rem;
        margin:0 auto;
      }
      span{
        font-size:12px;
        display: block;
        text-align: center;
        line-height: .27rem;
      }
    }
  }
  .foot{
    width: 100%;
    height: 1.35rem;
    margin-top:.1rem;
    img{
      width: 100%;
    }
  }
}

</style>
