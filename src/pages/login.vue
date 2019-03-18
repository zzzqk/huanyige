<template>
<div class="BigBox">
  <login-header></login-header>
  <login-content></login-content>
</div>
</template>

<script>
import loginHeader from "../components/login/loginHeader";
import loginContent from "../components/login/loginBody";



 export default {
   name:"login",
   data () {
     return {
     }
   },
   components: {loginHeader,loginContent}
 }
</script>

<style lang="scss">
/* 引入公样式 */
@import "../assets/css/index.css";
.BigBox{
    width:3.75rem;
    height:100%;
    display:flex;
    flex-direction: column;
    font-size: .16rem;
    .centent{
      flex:1;
      overflow-y: auto;
    }
}

</style>
