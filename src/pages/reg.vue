<template>
<div class="BigBox">
  <reg-header></reg-header>
  <reg-content></reg-content>
</div>
</template>

<script>
import regHeader from "../components/xygreg/regHeader"
import regContent from "../components/xygreg/regBody"



 export default {

   data () {
     return {

     }
   },
   components: { regHeader,regContent }
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
