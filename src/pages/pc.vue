<template>
<div class="BigBox">
  <pc-header></pc-header>
  <div class="content">
    <pc-content></pc-content>
  </div>
  <pc-footer></pc-footer>
  <!-- <div class="footer">

  </div> -->
</div>
</template>

<script>
import pcHeader from "../components/pc/pcHeader";
import pcContent from "../components/pc/pcContent";
import pcFooter from "../components/pc/pcFooter";



 export default {
   data () {
     return {


     }
   },
   components: {pcHeader,pcContent,pcFooter},
  methods: {

  },
  mounted(){
    // this.getData();

  },
  updated() {
    // this.getData();
  }
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
    .content{
      flex:1;
      overflow-y: auto;
    }
}

</style>
