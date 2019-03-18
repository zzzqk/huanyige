<template>
    <div class="BigBox">
        <!-- 串串命名法 -->
        <index-header></index-header>
        <!-- <index-content :indexData="indexData"></index-content>
        <index-footer></index-footer> -->
        <div class="content">
            <home-swiper></home-swiper>
            <navigator></navigator>
            <hoom-view></hoom-view>
            <buy-center></buy-center>
            <hoom-assess></hoom-assess>
        </div>
        <hoom-footer></hoom-footer>
    </div>
</template>

<script>
// 引入子组件
import indexHeader from "../components/index/indexHeader"
import HomeSwiper from "../components/index/swiper"
import Navigator from "../components/index/nav"
import hoomView from "../components/index/view"
import buyCenter from "../components/index/buycenter"
import hoomAssess from "../components/index/hoomAssess"
import hoomFooter from "../components/index/hoomFooter"

import indexApi from "../../apis/indexApi"
// import IndexContent from "../components/index/indexContent";
// import IndexFooter from "../components/index/IndexFooter";
export default {
    // 注册子组件名称
    components:{ indexHeader,HomeSwiper,Navigator,hoomView,buyCenter,hoomAssess,hoomFooter},
    data(){
        // 本组件的数据
      return{
        person:{}
      }
    },
    methods: {
        _initData(){
          indexApi.getData(data=>{
          console.log(data)
            this.person = data
          })
        }
    },
    created(){
        this._initData()
      }
}
</script>

<style lang="scss">
/* 引入公样式 */
@import "../assets/css/index.css";
/* @import "../assets/css/iconfont.css"; */
.BigBox{
    width:3.75rem;
    height:100%;
    display:flex;
    flex-direction: column;
    .content{
      flex:1;
      overflow-y: auto;
    }
}
</style>
