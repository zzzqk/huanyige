<template>
<div class="BigBox">
  <instr-header></instr-header>
  <div class="content">
    <instr-content :data="ttt"></instr-content>
  </div>
  <!-- <div class="footer">

  </div> -->
</div>
</template>

<script>
import instrHeader from "../components/instr/instrHeader";
import instrContent from "../components/instr/instrContent";


 export default {
   data () {
     return {
      //  "ddd":[],
       "ttt":[]
     }
   },
   components: {instrHeader,instrContent},
  methods: {
     getData() {
           fetch("static/view.json")
               .then(response=>{
                   //stream -> json
                   response.json().then(data=>{
                       this.ttt=data.instrlist;
                       console.log(444,this.ttt);
                   })
               })
       }
  },
  mounted(){
    this.getData();

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
