<template>
<div class="BigBox">
  <sx-header></sx-header>
  <div class="content">
      <sx-content  :data="ddd"></sx-content>
  </div>
  <sx-footer></sx-footer>
</div>
</template>

<script>
import sxHeader from "../components/suxi/sxHeader"
import sxContent from "../components/suxi/sxContent"
import sxFooter from "../components/suxi/sxFooter"


 export default {

   name:"suxi",
   data () {
     return {
       ddd:[]
     }
   },
   components: { sxHeader,sxContent,sxFooter},

   methods: {
     getData() {
           fetch("static/suxilist.json")
               .then(response=>{
                   //stream -> json
                   response.json().then(data1=>{
                      //  console.log(1,data1.data.suxiList);
                      //  console.log(22,this.ddd);
                       this.ddd = data1.data.suxiList;
                       console.log(333,this.ddd);
                   })
               })
       },
   },
   mounted() {

    this.getData();
  },
  updated() {
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
