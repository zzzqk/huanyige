<template>
<div class="header">
  <router-link to="/"><img src="../../assets/img/sx01.png" alt=""></router-link>
  <h3>说明</h3><a href="#"></a>
</div>
</template>

<script>
 export default {
   name:"instrHeader",
   data () {
     return {
     }
   },
   components: {

   }
 }
</script>
<style lang="scss" scoped>
.header{
  // width: 100%;
  height: .71rem;
  background-color: #00bbff;
  font-size:.18rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    padding-left:.24rem;
    img{
      width: .16rem;
      height: .24rem;
    }
  }
  h3{
    font-weight: 100;
    line-height: .71rem;
  }
}
</style>
