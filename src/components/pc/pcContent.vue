<template>
<section>
  <div class="head">
    <img src="static/img/pc01.png" alt="#"/>
    <a href="##">
      <span>12300000000</span>
      <img src="static/img/pc02.png" alt="#"/>
      <span>12300000000</span>
    </a>
  </div>
  <div class="dingdan">
    <div class="ddTop">
      <h3>我的订单</h3> <img src="" alt="">
      <img src="static/img/pc02.png" alt="#"/>
    </div>
    <div class="ddBottom">
      <a href="##">
        <img src="static/img/pc05.png" alt="#"/>
        <span>未支付</span>
      </a>
      <a href="##">
        <img src="static/img/pc05.png" alt="#"/>
        <span>未支付</span>
      </a>
      <a href="##">
        <img src="static/img/pc05.png" alt="#"/>
        <span>未支付</span>
      </a>
      <a href="##">
        <img src="static/img/pc05.png" alt="#"/>
        <span>未支付</span>
      </a>
      <a href="##">
        <img src="static/img/pc05.png" alt="#"/>
        <span>未支付</span>
      </a>
    </div>
  </div>
  <div class="mywallet">
    <h3>我的钱包</h3>
    <div class="wallet">
      <div class="wallet_left">
        <img src="static/img/qb01.png" alt="#"/>
        <span>余额：</span>
        <span>￥0.00</span>
      </div>
      <div class="wallet_right">
        <span>充值</span>&nbsp;&nbsp; <img src="static/img/pc02.png" alt="#"/>
      </div>
    </div>
    <div class="line"></div>
    <div class="wallet">
      <div class="wallet_left">
        <img src="static/img/qb02.png" alt="#"/>
        <span>优惠券：</span>
        <span>￥100</span>
      </div>
      <div class="wallet_right">
        <span>查看</span>&nbsp;&nbsp; <img src="static/img/pc02.png" alt="#"/>
      </div>
    </div>
  </div>
  <div class="footbox">
    <h3>我的地址</h3><img src="static/img/pc02.png" alt="#"/>
  </div>
  <div class="footbox">
    <h3>购买记录</h3><img src="static/img/pc02.png" alt="#"/>
  </div>
  <div class="footbox">
    <h3>我的二维码</h3><img src="static/img/pc02.png" alt="#"/>
  </div>
  <div class="footbox">
    <h3>关于我们</h3><img src="static/img/pc02.png" alt="#"/>
  </div>
</section>
</template>

<script>
 export default {
   name:'pcContent',
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
    // height: 2.08rem;
  .head{
    height: 2.08rem;
    background:url(../../assets/img/pc03.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img{
      width: .93rem;
      height: .93rem;
    }
    a{
      margin-left:.5rem;
      span{
        color:#6a6a68;

      }
      img{
          width: .07rem;
          height: .11rem;
          padding-left: 1.25rem;
        }

    }
  }
  .dingdan{
    // padding:0 .15rem;
    background: #fff;
    .ddTop{
      height: .53rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #999;
      h3{
        padding-left:0.15rem;
      }
      img{
        width: .07rem;
        height: .11rem;
        padding-right:0.15rem;
      }
    }
    .ddBottom{
      display: flex;
      a{
        flex:1;
        font-size: 12px;
        color: black;
        padding-top:.1rem;
        img{
          width: .34rem;
          height: .39rem;
          margin:0 auto;
        }
        span{
          display: block;
          text-align: center;
          margin:.12rem;
        }
      }
    }
  }
  .mywallet{
    width: 3.39rem;
    background: #fff;
    margin-top:.1rem;
    margin:.1rem auto 0;
    padding-left:.16rem;

    h3{
      padding-top:.1rem;
      padding-bottom: .16rem;
      border-bottom:1px solid #999;
    }
    .wallet{
        display: flex;
        justify-content: space-between;
        height: .57rem;
        align-items: center;
      .wallet_left{
        display: flex;
        span{
          display: block;
          margin-top:.08rem;
          margin-left: .1rem;
          color:red;
          font-weight: 900;
        }
        img{
          width: .31rem;
          height: .32rem;
        }
      }
      .wallet_right{
        display: flex;
      align-items: center;
        span{
          display: block;
        }
        img{
          width: .06rem;
          height: .11rem;
          margin-right: .17rem;
        }
      }
    }
    .line{
      border: 1px solid #999;
      margin-left:10%;
    }
  }
  .footbox{
    width: 3.55rem;
    margin:.1rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: .45rem;
    align-items: center;
    h3{
      padding-left:.17rem;
    }
    img{
      padding-right:.17rem;
      width: .07rem;
      height: .11rem;
    }
  }
}

</style>
