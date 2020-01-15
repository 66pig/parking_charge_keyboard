<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    this.setHtmlFontSize()
  },
  methods: {
    setHtmlFontSize () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px' // 动态计算font-size，rem单位
      } else {
        document.documentElement.style.fontSize = 110 + 'px'
      }
    }
  }
}
</script>

<style>
  @import '~@/assets/styles/css/App.css';
</style>
