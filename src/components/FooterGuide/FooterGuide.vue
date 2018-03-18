<template>
  <div class="footer_guide border-1px">
    <span class="guide_item_msite" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <a href="#" class="iconfont icon-waimai"></a>
    </span>
    <span class="guide_item_class" :class="{on: $route.path==='/class' || $route.path==='/class/classify' || $route.path==='/class/brand'}" @click="goto('/class')">
        <a href="#" class="iconfont icon-search"></a>
    </span>
    <span class="guide_item_shopping" :class="{on: $route.path==='/shopping'}" @click="goto('/shopping')">
        <a href="#" class="iconfont icon-dingdan"></a>
    </span>
    <span class="guide_item_me" :class="{on: $route.path==='/me' || $route.path==='/me/login' || $route.path==='/me/phone'}" @click="goto('/me')">
        <a href="#" class="iconfont icon-geren"></a>
    </span>
  </div>
</template>

<script>
  export default {

    methods: {
      goto(path) {
        //跳转到指定的路径
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  icon_items()
    position relative
    background url(./images/icon.png) no-repeat
    background-size 234px 163px
    margin 0 auto
    height 40px
    width 42px
    margin-top 2px
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
  .guide_item_msite
    icon_items()
    background-position -85px 0px
    &.on
      background-position -41px 0px
  .guide_item_class
    icon_items()
    background-position -85px -41px
    &.on
      background-position -42px -41px
  .guide_item_shopping
    icon_items()
    background-position -85px -81px
    &.on
      background-position -42px -81px
  .guide_item_me
    icon_items()
    background-position -85px -122px
    &.on
      background-position -42px -122px
</style>
