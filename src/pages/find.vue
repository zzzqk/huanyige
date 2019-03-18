<template>
<div class="BigBox">
  <find-header></find-header>
  <find-content></find-content>
</div>
</template>

<script>
import findHeader from "../components/find/findHeader";
import findContent from "../components/find/findContent";



 export default {
   name:"find",
   data () {
     return {
     }
   },
   components: {findHeader,findContent}
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
