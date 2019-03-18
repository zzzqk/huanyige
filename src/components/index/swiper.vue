<template>
    <div class="wrap">
        <div class="swiper-container swiper-h" v-if="swiperlist.length">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
                <img :src="item.img">
                </div>
            </div>
                        <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div> -->
            <!-- <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
// import  '../../../.././bower_components/swiper/dist/css/swiper.css'
// import Swiper from '../../../.././bower_components/swiper/dist/js/swiper'

    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
export default {
    name: 'HomeSwiper',
    data(){
      return {
        swiperlist:[
          {
            id:"01",
            img:"static/img/s6.jpg"
          },
          {
            id:"02",
            img:"static/img/s2.jpg"
          },
          {
            id:"03",
            img:"static/img/s3.jpg"
          },
          {
            id:"04",
            img:"static/img/s4.jpg"
          },
          {
            id:"05",
            img:"static/img/s5.jpg"
          },
          {
            id:"06",
            img:"static/img/s1.jpg"
          }
        ]
      }
    },
    // props:{
    //     swiperlist:Array
    // },
    mounted() {
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项(vertical)
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,

        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
        // var mySwiper=new Swiper ('.swiper-container', {
        //     preventClicks : false,
        //     slideToClickedSlide: true,
        //     preventLinksPropagation : false,
        //     setWrapperSize: true,
        //     autoHeight: true,
        //     autoplay: true,
        //     loop: true,// 循环模式选项
        //     observer:true,
        //     observeParents:false,
        //     grabCursor:true,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         type: 'fraction'
        //     },
        // })
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
        // overflow:hidden;
        width:100%;
        height:1.85rem;
        // padding-bottom:29%;
        .swiper-container{
            touch-action: none;
            width: 100%;
            height: 1.85rem;
            .swiper-slide{

                img{
                  height:1.85rem;
                    width: 100%;
                }
            }
            .swiper-pagination{
                top:.66rem;
                height: 10px;
            }
        }
    }
    // 分页器的大小样式
    // .swiper-pagination-bullet{
    //   width: 8px;
    //   height: 8px;
    // }
    // 变动的那个分页器的样式
    // .swiper-pagination-bullet-active{
    //   background: #999;
    // }
</style>
