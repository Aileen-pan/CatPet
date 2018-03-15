<template>
  <div class="msite">
    <!--广告-->
    <!--<div class="msite_header" v-show="isShow">
      <img id="moveimg" src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" alt="">
      <span class="msite_header_colse" @click="moveImg">
      <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="">
    </span>
    </div>-->
    <div class="msite_top">
      <div class="msite_search">
        <div class="msite_search_address">
          <a href="#">
            <span>猫猫</span>
            <span>|</span>
            <span>重庆</span>
            <i class="iconfont icon-xiala"></i>
          </a>
        </div>
        <div class="msite_search_font">
          <a class="msite_search_font_value" href="#">
            <span>搜索商品和品牌</span>
            <i class="iconfont icon-sousuo"></i>
          </a>
        </div>
        <a class="msite_search_message">
          <i class="iconfont icon-tongzhi"></i>
        </a>
      </div>
      <div class="msite_header_top">
        <div class="msite_header_top_items">
          <ul class="top_items">
            <li class="top_items_li" v-for="menu in menus">{{menu.menu_name}}</li>
          </ul>
        </div>
      </div>

    </div>
    <div class="wrapper">
      <div class="content">
        <!--輪播圖-->
        <div class="swiper-container" id="swiper01">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/17/123c7c1105232b370e3b72ec0cf73d5b.jpg@!water" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-03/13/11/4ef99909878e085991c086a09820bbbc.jpg@!water" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/17/123c7c1105232b370e3b72ec0cf73d5b.jpg@!water" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/21/e6491236fd1c8b0b932a702db197e83e.jpg@!water" alt="">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <img class="bigImg" src="https://img2.epetbar.com/nowater/2018-03/12/15/f7e7baa7ff344faa0a7ca9b64a2546da.jpg@!water" alt="">
        <Items></Items>
        <img src="https://img2.epetbar.com/nowater/2018-03/13/09/30efaac5d67309536837c5759e30a830.jpg@!water" alt="">
        <div class="time">
          <div class="time_top">
            <div class="time_top_img">
              <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" alt="">
            </div>
            <div class="time_top_right">
              <span class="time_top_time">
                <span>本场结束</span>
                <span class="time_top_time_number">11</span>
                <span>:</span>
                <span class="time_top_time_number">00</span>
              </span>
              <span class="time_top_more">
                <sapn class="time_top_more_next">更多</sapn>
                <i class="iconfont icon-gengduotianchong"></i>
              </span>
            </div>
          </div>
          <div class="swiper-container" id="swiper02">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="#">
                  <img src="https://img1.epetbar.com/2015-11/16/16/b56724def1ab1adc3bc1425ae5f3b0c3.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                </a>
                <p class="swiper_slide_p1">￥1.8</p>
                <p class="swiper_slide_p2">省16.2</p>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-03/10/10/604e4cab9b96e71679923f35c1408590.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                </a>
                <p class="swiper_slide_p1">￥1.8</p>
                <p class="swiper_slide_p2">省16.2</p>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-01/06/14/d76fa7cbe4d6ab6db304505c178c36d1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                </a>
                <p class="swiper_slide_p1">￥1.8</p>
                <p class="swiper_slide_p2">省16.2</p>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <img src="https://img1.epetbar.com/2017-07/04/14/5f0fee3f70079beb60d02104abcf75df.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                </a>
                <p class="swiper_slide_p1">￥1.8</p>
                <p class="swiper_slide_p2">省16.2</p>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <img src="https://img1.epetbar.com/2017-07/04/14/5f0fee3f70079beb60d02104abcf75df.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                </a>
                <p class="swiper_slide_p1">￥1.8</p>
                <p class="swiper_slide_p2">省16.2</p>
              </div>
            </div>
          </div>
        </div>
        <img class="bigImg" src="https://img2.epetbar.com/nowater/2018-03/12/15/539f277efe191aebf75f455d4027e232.jpg@!water" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/d42e17b8d7b711a9fbd3a5e928ccf598.gif" alt="">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/342a3cec4b18a11b1801aa1ba690f491.jpg@!water" alt="">
        <div class="fourimg">
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/15/245a0cde4536c8a4bdc06dbcea2ca321.jpg@!water" alt="">
          </a>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/15/9f0d6fb16fa0b1795fcc9b26fc6e3e35.jpg@!water" alt="">
          </a>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/15/9f0d6fb16fa0b1795fcc9b26fc6e3e35.jpg@!water" alt="">
          </a>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/15/245a0cde4536c8a4bdc06dbcea2ca321.jpg@!water" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import Items from '../../components/Items/Items'



  export default {
    data(){
      return{
        isShow:true,

      }
    },
    methods:{
      moveImg(){
        this.isShow =! this.isShow
      }
    },
    computed: {
      ...mapState(['menus']),
    },
    mounted() {
      //轮播
      let swiper = new Swiper('#swiper01', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })

      let swiper2 = new Swiper('#swiper02', {
        slidesPerView : 3.5,
      })

      //滑动
      if(!this.scroll){
        this.scroll =  new BScroll('.wrapper',{
          click :true
        })
      }else{
        this.scroll.refresh()
      }
    },
    components: {
      Items
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  img
    width 100%
    display block
  .msite
    height 100%
    background #ffffff
  .msite_top
    z-index 100
    width 100%
    position fixed
  .msite_header
    width 100%
    height 100%
    img
      width 100%
  .msite_header_colse
    width 19px
    height 19px
    position absolute
    top 2%
    left 2%
    img
      width 19px
      height 19px
  .msite_search
    display flex
    justify-content space-between
    width 100%
    height 51px
    background-color #ffffff
    box-sizing border-box
    padding 0 2%
    line-height 51px
    i
      font-size 8px
  .msite_search_font
    flex 2
    background #e4e7e7
    box-sizing border-box
    margin 12px 5px
    border-radius 4px
    .msite_search_font_value
      display flex
      justify-content space-between
      line-height 27px
      margin 0 5px
  .msite_search_message
    margin 0 10px
    i
      font-size 20px
  li
    list-style none
  .msite_header_top
    background #ffffff
    width 100%
    height 37px
    line-height 37px
    overflow hidden
    .msite_header_top_items
      height 53px;
      overflow-x scroll;
      overflow-y hidden;
      .top_items
        width 142%
        display flex
        .top_items_li
          text-align center
          flex 1
          width 74px
          height 35px
          box-sizing border-box
          &:eq(index[0])
            color: #f384a5
  .rating-item
    box-sizing border-box
    width 100%
  // margin-top 142px

  .swiper-container
    width 100%
    .swiper-wrapper
      width 100%
      .swiper-slide
        width 100%
        >a
          >img
            width 100%
            display block

  .bigImg
    width 100%
    display block
  .wrapper
    height 100%
    padding-top 90px
    padding-bottom 50px
    box-sizing border-box
  .content
    padding-bottom 140px
.time_top
  width 100%
  box-sizing border-box
  padding 10px 5px
  display flex
  justify-content space-between
  align-items center
  .time_top_img
    flex 50%
    img
      width 85px
      display block
  .time_top_right
    font-size 14px
    .time_top_time_number
      border solid 1px #cdcbce
      border-radius 2px
      box-sizing border-box
      padding 1px
      font-size 12px
    .time_top_more
      margin-left 15px
      .time_top_more_next
        font-size 6px
        color #cdcbce
      .icon-gengduotianchong
        font-size 5px
        color #cdcbce
.time
  width 100%
  background #ffffff
  .swiper-slide
    box-sizing border-box
    padding 10px
    display flex
    flex-direction column
    align-items center
    >a
      width 85px
      height 85px
      >img
        margin-left 5px
        width 100%
    .swiper_slide_p1
      box-sizing border-box
      padding 10px
      color: #f04242
      font-size 14px
    .swiper_slide_p2
      color #7e8c8d
      font-size 10px

.fourimg
  width 100%
  display flex
  flex-wrap wrap
  >a
    width 50%
    height 100px
    >img
      width 100%

</style>
