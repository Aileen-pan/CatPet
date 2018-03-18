<template>
  <div class="msite">
    <a class="cat">
    </a>
    <!--广告-->
    <!--<div class="msite_header" v-show="isShow">
      <img id="moveimg" src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" alt="">
      <span class="msite_header_colse" @click="moveImg">
      <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="">
    </span>
    </div>-->
    <!--头部-->
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
          <div class="top_items">
            <div class="top_items_li" @click="on(index)" :class="{on:index===number}" v-for="(menu , index) in menus" :k="index">
              <span class="color">{{menu.menu_name}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--下部-->
    <div class="wrapper">
      <div class="content">
        <!--輪播圖-->
        <Lunbo :lunBos="lunBos[0]"></Lunbo>
        <!--大图-->
        <img class="bigImg" src="https://img2.epetbar.com/nowater/2018-03/12/15/f7e7baa7ff344faa0a7ca9b64a2546da.jpg@!water" alt="">
        <!--小图标10个-->
        <Items></Items>
        <!--正品秒杀-->
        <img src="https://img2.epetbar.com/nowater/2018-03/13/09/30efaac5d67309536837c5759e30a830.jpg@!water" alt="">
        <!--每日疯抢-->
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
                <span class="time_top_more_next">更多</span>
                <i class="iconfont icon-gengduotianchong"></i>
              </span>
            </div>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(goodImg , index) in goodImgs" :key="index">
                <a href="#">
                  <img :src="goodImg.image" alt="">
                </a>
                <p class="swiper_slide_p1">{{goodImg.sale_price}}</p>
                <p class="swiper_slide_p2">{{goodImg.little_price}}</p>
              </div>
      <!--        <div class="swiper-slide">
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
              </div>-->
            </div>
          </div>
        </div>
        <!--品牌力量-->
        <img class="bigImg" src="https://img2.epetbar.com/nowater/2018-03/12/15/539f277efe191aebf75f455d4027e232.jpg@!water" alt="">
        <!--视屏-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/d42e17b8d7b711a9fbd3a5e928ccf598.gif" alt="">
        <!--vip-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/342a3cec4b18a11b1801aa1ba690f491.jpg@!water" alt="">
        <!--四个图片-->
        <ImgItems :bigImg="iconImgs[0]"></ImgItems>
        <!--大牌-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/306bc8bbc13de5b9a98cf504c8f421a2.jpg@!water" alt="">
        <!--团购轮播-->
        <Lunbo :lunBos="lunBos[1]"></Lunbo>
        <!--大牌好货-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/15/71018a43d78882a0efa778ddb874c7f0.jpg@!water" alt="">
        <!--商品列表頁-->
        <ImgItems v-for="(bigImg , index) in bigImgs" :key="index" :bigImg="bigImg"></ImgItems>
        <!--最惨奖-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/16/6b9ce0aef1bbd0b79d3f113e9926bf66.jpg@!water" alt="">
        <!--图片-->
        <img src="https://img2.epetbar.com/nowater/2018-03/13/11/77083b3123651021e93df1e89549f623.jpg@!water" alt="">
        <!--特别星球-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/16/cd076253f630f58983c814511b651ec9.jpg@!water" alt="">
        <!--3张图列表-->
        <ImgItems :bigImg="iconImgs[1]"></ImgItems>
        <!--特色栏目-->
        <img src="https://img2.epetbar.com/nowater/2018-03/12/16/061ccf3d4ad81f70f9a9022fa0d049b8.jpg@!water" alt="">
        <ImgItems :bigImg="iconImgs[2]"></ImgItems>
        <div class="buttom">
          <div class="buttom_top">
            <span class="buttom_top_on">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Items from '../../components/Items/Items'
  import ImgItems from '../../components/ImgItems/ImgItems'
  import Lunbo from '../../components/Lunbo/Lunbo'


  export default {

    data(){
      return{
        isShow:true,
        number:0,
      }
    },
    methods:{
      moveImg(){
        //this.isShow =! this.isShow
      },
      on(index){
        this.number=index
      }
    },
    computed: {
      ...mapState(['menus' , 'bigImgs' , 'iconImgs' , 'lunBos' , 'goodImgs']),

    },
    watch:{
      goodImgs(){
        this.$nextTick(()=>{
          //轮播
          let swiper2 = new Swiper('.swiper-container', {
            slidesPerView : 3.5,
            preventClicks:false,
          })
        })
      }

    },
    mounted() {


      //滑动
      if(!this.scroll){
        this.scroll =  new BScroll('.wrapper',{
          click :true
        })
      }else{
        this.scroll.refresh()
      }
    },
    mounted(){
      this.$store.dispatch('getMenus')
      this.$store.dispatch('getPingpais')
      this.$store.dispatch('getBigimgs')
      this.$store.dispatch('getIconimgs')
      this.$store.dispatch('getLunbos')
      this.$store.dispatch('getGoodimgs')



    },
    components: {
      Items,
      ImgItems,
      Lunbo

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
  .cat
    z-index 1
    background url("./images/gocat.png") no-repeat
    background-size 82px 46px
    background-position 0 0
    width 41px
    height 46px
    position fixed
    right 0
    bottom 60px
    animation cat 2s steps(1,end) infinite
    @keyframes cat{
      50%{
        background-position -42px 0
      }
    }
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
          //background #007aff
        &.on
          color: #f384a5
          >span
            box-sizing border-box
            padding 9px 0
            border-bottom solid 2px #ff3b00

.rating-item
  box-sizing border-box
  width 100%
// margin-top 142px



.bigImg
  width 100%
  display block
.wrapper
  height 100%
  padding-top 89px
  padding-bottom 100px
  box-sizing border-box
.content
  padding-bottom 50px
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

.items_page1
  width 100%
  display flex
.items_page2
  width 100%
  display flex
.items_page3
  width 100%
  display flex
.items_page4
  width 100%
  display flex
.items_page5
  width 100%
  display flex
.line
  width 100%
  height 10px
  background #020001
.buttom
  width 100%
  background #ffffff
  text-align center
  >p
    padding-bottom 20px
.buttom_top
  padding 20px
  >span
    margin 0px 5px
    font-size 14px
  .buttom_top_on
    color #f04242





</style>
