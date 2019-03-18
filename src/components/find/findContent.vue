<template>
<div class="content">
  <div class="logo">
    <img src="../../assets/img/logo.png" alt="#">
  </div>
  <form action="" class="form">
    <div class="box">
      <span>手机号</span> <input type="text" placeholder=" 请输入手机号">
    </div>
    <div class="box">
      <span>新密码</span> <input type="password" placeholder=" 请输入密码">
    </div>
    <div class="box">
      <span>确认密码</span> <input type="password" placeholder=" 请再次输入密码">
    </div>
    <div class="box">
      <span>验证码</span><input type="password" placeholder=" 请输入验证码"><span class="telreg">获取验证码</span>
    </div>
    <!-- <div class="text">
      <input type="radio"/><span>我已同意</span><a href="##">《浣衣阁用户注册协议》</a>
    </div> -->
    <div class="sub">
      <input type="submit" value="完成"/>
    </div>
    <div class="foot">
      <router-link to="/login">已有账户</router-link>
      <router-link to="/reg">注册账号</router-link>
    </div>
  </form>

</div>
</template>

<script>
 export default {
   name:'findContent',
   data () {
     return {

     }
   },
   components: {
   }
 }
</script>

<style lang='scss'scoped>
.content{
  height: 100%;
  background: url(../../assets/img/bg.png);
  background-size: 100% 100%;
  // background-color: gray;
  // opacity: .3;
  padding:0 .1rem;
  .logo{
    img{
      width: .74rem;
      height: .73rem;
      padding-top: .52rem;
      padding-bottom: .2rem;
      margin:0 auto;
    }
  }
  .form{
    .box{
      display: flex;
      align-items: center;
      border-top: 1px solid #ebe4eb;
      color:white;
      display: flex;
      height: .4rem;
      span{
        display: block;
        width: 1.2rem;
        text-indent: .06rem;
        font-size:.15rem;
      }
      input{
        background-color: transparent;
        outline: 0;
        border:0;
        color:white;
        width: 1.5rem;
        height: .3rem;
        font-size:14px;
      }
      ::-webkit-input-placeholder{
        color:#fcfffa;
      }
    }
    .box:nth-child(4){
      border-bottom: 1px solid #ebe4eb;
      .telreg{
        width: .81rem;
        height: .28rem;
        background-color: #00bbff;
        border-radius: 3px;
        font-size:14px;
        line-height: .28rem;
      }
    }
    .text{
      text-align: center;
      margin:.15rem 0 .56rem 0;
      span{
        color:#fcfffa;
        font-size:12px;

      }
      a{
        color:red;
        font-size:14px;
        text-decoration: underline;
      }
    }
    .sub{
      margin-top:.4rem;
      input{
        width:3.55rem;
        height: .43rem;
        background: #00bbff;
        border:none;
        border-top-left-radius: .21rem;
        border-top-right-radius: .21rem;
        border-bottom-left-radius: .21rem;
        border-bottom-right-radius: .21rem;
        outline: 0;
        text-align: center;
        color:white;
      }
    }
    .foot{
      display: flex;
      justify-content: space-between;
      margin-top:.22rem;
      a{
        color: white;
        font-size:14px;
      }
    }
  }
}

</style>
