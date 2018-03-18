<template>
  <div class="me">
    <div class="me_login">
      <div class="me_login_top">
        <i class="iconfont icon-fanhui"></i>
        <span>注册</span>
      </div>
      <div class="me_login_way">
        <a class="login_way_login">
          <span>普通登录</span>
          <i class="iconfont icon-shang"></i>
        </a>
        <a class="login_way_phone">
          <span>手机动态密码登录</span>
          <i class="iconfont icon-shang"></i>
        </a>
      </div>
    </div>
    <div class="input_content">
      <form class="content">
        <div class="content_name">
          <i class="iconfont icon-wo"></i>
          <input type="text" value="手机号/邮箱/用户名">
        </div>
        <div class="content_password">
          <i class="iconfont icon-mima"></i>
          <input type="text" value="输入密码">
        </div>
        <a class="forget_pssword">忘记密码?</a>
        <input class="content_submit" type="submit" value="登录">
      </form>
    </div>
    <div class="input_content_phone">
      <form class="content">
        <div class="content_name">
          <i class="iconfont icon-wo"></i>
          <input type="text" value="已注册的手机号">
        </div>
        <div class="content_password">
          <i class="iconfont icon-mima"></i>
          <input type="text" value="动态密码">
        </div>
        <div class="content_password">
          <i class="iconfont icon-mima"></i>
          <input type="text" value="">
        </div>
        <a class="forget_pssword">忘记密码?</a>
        <input class="content_submit" type="submit" value="登录">
      </form>
    </div>
    <div class="getin_icon">
      <p class="getin_icon_name">合作网站登录</p>
      <div class="icons">
        <i class="iconfont icon-zhifubao"></i>
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weixin"></i>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "me"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.me
  width 100%
  height 90%
 // background #ffffff
  .me_login
    position relative
    width 100%
    height 180px
    background url("./img/login-background.png") no-repeat
    background-size 100% 100%
    .me_login_top
      width 100%
      height 50px
      display flex
      justify-content space-between
      align-items center
      box-sizing border-box
      padding 0 15px
      >span
        font-size 16px
        color #ffffff
      >i
        color #ffffff
    .me_login_way
      width 100%
      height 44px
      position absolute
      bottom 0
      background rgba(255,255,255,0.3)
      display flex
      justify-content space-around
      >a
        display flex
        flex-direction column
        align-items center
        >span
          line-height 44px
          font-size 14px
          color #ffffff
        >i
          position absolute
          bottom 0
          font-size 8px
          color #ffffff



  .input_content
    display none
    width 100%
    padding-bottom 100px
    background #ffffff
    .content
      margin 0 8%
      .content_name
        border-bottom solid 1px #d5d5d5
        .icon-wo
          color #d5d5d5
          font-size 18px
          margin-right 5px
        >input
          height 46px
          color: #d5d5d5
          font-size 14px
      .content_password
        border-bottom solid 1px #d5d5d5
        .icon-mima
          color #d5d5d5
          font-size 18px
          margin-right 5px
        >input
          height 46px
          color: #d5d5d5
          font-size 14px
      .forget_pssword
        display flex
        justify-content flex-end
        margin 15px 0
        font-size 14px
      .content_submit
        background #2ec975
        width 100%
        height 38px
        border-radius 6px
        color #ffffff
        line-height 38px
  .input_content_phone
      //display none
      width 100%
      padding-bottom 100px
      background #ffffff
      .content
        margin 0 8%
        .content_name
          border-bottom solid 1px #d5d5d5
          .icon-wo
            color #d5d5d5
            font-size 18px
            margin-right 5px
          >input
            height 46px
            color: #d5d5d5
            font-size 14px
        .content_password
          border-bottom solid 1px #d5d5d5
          .icon-mima
            color #d5d5d5
            font-size 18px
            margin-right 5px
          >input
            height 46px
            color: #d5d5d5
            font-size 14px
        .forget_pssword
          display flex
          justify-content flex-end
          margin 15px 0
          font-size 14px
        .content_submit
          background #2ec975
          width 100%
          height 38px
          border-radius 6px
          color #ffffff
          line-height 38px
  .getin_icon
    width 100%
    background #ffffff
    .getin_icon_name
      text-align center
      color: #d5d5d5
    .icons
      display flex
      padding 15px 0
      justify-content space-around
      >i
        font-size 50px
        margin 10px
      .icon-zhifubao
        color: #00a0e9
      .icon-qq
        color: #4bc9ff
      .icon-weixin
        color: #2ec975
</style>
