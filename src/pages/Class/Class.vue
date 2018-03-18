<template>
  <div class="class">
    <Header></Header>
    <router-view></router-view>
  </div>

</template>

<script>
  import Header from '../../components/Classify/Header'
  export default {
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.class
  height 100%
</style>
