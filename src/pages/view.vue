<template>
<div class="BigBox">
  <view-header></view-header>
  <div class="content">
    <view-content :data="ddd"></view-content>
  </div>
  <!-- <div class="footer">

  </div> -->
</div>
</template>

<script>
import viewHeader from "../components/view/viewHeader";
import viewContent from "../components/view/viewContent";


 export default {
   data () {
     return {
       "ddd":[]
     }
   },
   components: {viewHeader,viewContent},
  methods: {
     getData() {
           fetch("static/view.json")
               .then(response=>{
                   //stream -> json
                   response.json().then(data=>{
                       this.ddd = data.viewlist;
                       console.log(333,this.ddd);
                   })
               })
       }
  },
  mounted(){
    this.getData();
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
