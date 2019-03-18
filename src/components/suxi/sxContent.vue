<template>
<!-- <div style="height:100%;"> -->
  <div class="content_sx">
    <div class="left">
      <ul>
        <li>服装类</li>
        <li>鞋类</li>
        <li>皮具养护</li>
        <li>床上用品</li>
        <li>家居用品</li>
        <li>汽车用品</li>
        <li>下载</li>
        <li>其他小件</li>
        <li>皮草类</li>
      </ul>
    </div>
    <div class="right">
        <!-- <div class="info"> -->
          <div class="box1"></div>
          <div class="box2">
            <div class="info" v-for="(item,index) in data" :key="index" >
            <div class="infoleft">
              <img :src="item.img" alt="#"/>
              <div class="price">
                <h4> {{item.p1}}</h4>
                <h4>{{item.price}}</h4>
              </div>
            </div>
            <div class="inforight">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </div>
            </div>
          </div>
          <div class="box3"></div>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
 export default {
   props:["data"],
   name:'sxContent',
   data () {
     return {
     }
   },
   components: {

   },
   methods: {
     getinfo(){

     }
   },
   mounted () {

   }
 }
</script>

<style lang='scss' scoped>
.content_sx{
  height:100%;
  display: flex;

  .left{
    overflow-y: auto;
    ul{
      border-right:1px solid #999;
      li{
      width: .93rem;
      height: .52rem;
      border-bottom:1px solid #999;
      text-align: center;
      line-height: .52rem;
      }
    }

  }
    .right{
      flex:1;
      border-left:1px solid #999;
      // display: flex;
      // flex-direction: column;
      overflow-y: auto;


        .info{
          flex:1;
          display: flex;
          height: .74rem;
          background: pink;
          justify-content: space-between;
          padding-top:.08rem;
          padding-bottom: .17rem;
          .infoleft{
            display: flex;
            img{
              width:.55rem;
              height: .74rem;
            }
            .price{
              padding-left: .19rem;
                font-size: 14px;
              h4{
                font-size: 14px;
                color:#848387;
                font-weight: 100;
                line-height: .22rem;
              }
              h4:nth-child(2){
                color:red;
              }
            }

          }
          .inforight{
            padding-top:.31rem;
            display: flex;
            padding-right: .19rem;
            span{
              width: .22rem;
              height: .22rem;
              border-radius: 50%;
              border:1px solid #02baf6;
              // display: block;
              color:#02baf6;
              font-size: 18px;
              text-align: center;
              line-height: .22rem;
            }
            span:nth-child(2){
              border:none;
            }
          }

        }
    }
}

</style>
