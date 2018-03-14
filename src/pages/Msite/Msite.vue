<template>
  <div class="msite_top">
    <div class="msite_header" v-show="isShow">
      <img id="moveimg" src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" alt="">
      <span class="msite_header_colse" @click="moveImg">
        <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="">
      </span>
    </div>
    <div class="msite_search">
      <div class="msite_search_address">
          <a href="#">
            <span>狗狗</span>
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
          <li class="top_items_li on">{{menus.menu_name}}</li>
          <li class="top_items_li">狗狗主粮</li>
          <li class="top_items_li">服饰城</li>
          <li class="top_items_li">医疗保健</li>
          <li class="top_items_li">零食玩具</li>
          <li class="top_items_li">日用外出</li>
          <li class="top_items_li">美容香波</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

export default {
  data(){
    return{
      isShow:true
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
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite_top
  position fixed
  top 0
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
  background antiquewhite
  width 375px
  height 35px
  line-height 35px
  overflow hidden
  .msite_header_top_items
    height 51px;
    overflow-x scroll;
    overflow-y hidden;
    .top_items
      width 525px
      display flex
      .top_items_li
        text-align center
        flex 1
        width 74px
        height 35px
        box-sizing border-box
        .on
          color #f384a5
</style>
