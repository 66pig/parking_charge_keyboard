<style scoped>
.boundprovince {
  position: fixed;
  height: 2rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c8d0da;
  padding-bottom: .04rem;
}
.close-box {
  height: .35rem;
  position: absolute;
  left: 0;
  right: 0;
  top: -.35rem;
  border-top: 1px solid #eee;
  background-color: #fff;
}
.close-btn {
  display: block;
  height: .35rem;
  width: .35rem;
  text-align: center;
  line-height: .35rem;
  position: absolute;
  right: .16rem;
  top: 0;
  color: #26a2ff;
}
.keyboard a{
  text-decoration: none;
  width: 0.325rem;
  height: 0.425rem;
  display: inline-block;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.425rem;
  background-color: #fff;
  margin: 0.04rem 0.025rem;
  border-radius: 0.04rem;
  -webkit-box-shadow: 0 0.01rem 0rem #888992;
  box-shadow: 0 0.01rem 0rem #888992;
  font-weight: 500;
  color: #222;
}
.keyboard .item {
  text-align: center;
}
.keyboard .four {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.delete-box {
  display: inline-block;
  margin: 0.04rem 0.025rem;
  height: 0.425rem;
  background-color: #a8afbf;
  margin-left: .4rem;
  border-radius: 4px;
  width: calc((100%/10 - 3%)*2);
}
.delete {
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA1MiA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPuWIoOmZpDwvdGl0bGU+PGRlZnM+PHBhdGggZD0iTTUgMGg0MWE1IDUgMCAwIDEgNSA1djMyLjVhNSA1IDAgMCAxLTUgNUg1YTUgNSAwIDAgMS01LTVWNWE1IDUgMCAwIDEgNS01eiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii0xJSIgeT0iLTEuMiUiIHdpZHRoPSIxMDIlIiBoZWlnaHQ9IjEwNC43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuNTI1NDkwMTk2IDAgMCAwIDAgMC41MzcyNTQ5MDIgMCAwIDAgMCAwLjU1Njg2Mjc0NSAwIDAgMCAxIDAiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0E4QjBCRCIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTEuMjAzIDIxLjMzOGExIDEgMCAwIDAgLjAxMyAxLjIyNWw2Ljc2OCA4LjU1N2ExIDEgMCAwIDAgLjc4NS4zOGgxOS4zNGEzIDMgMCAwIDAgMy0zVjE1YTMgMyAwIDAgMC0zLTNIMTguNzhhMSAxIDAgMCAwLS43OTcuMzk2bC02Ljc4IDguOTQyeiIgc3Ryb2tlPSIjMTcxODFEIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjkuNDUgMjEuNTQ2bDIuNzggMi44MjNhMSAxIDAgMCAxLTEuNDI1IDEuNDA0bC0yLjc4LTIuODIzLTIuODIzIDIuNzhhMSAxIDAgMCAxLTEuNDA0LTEuNDI1bDIuODIzLTIuNzgtMi43OC0yLjgyM2ExIDEgMCAwIDEgMS40MjUtMS40MDRsMi43OCAyLjgyMyAyLjgyMy0yLjc4YTEgMSAwIDAgMSAxLjQwNCAxLjQyNWwtMi44MjMgMi43OHoiIGZpbGw9IiMxNzE4MUQiLz48L2c+PC9nPjwvc3ZnPg==) no-repeat 90%;
    height: 100%;
    background-position: center;
    background-size: 100%;
}
</style>
<template>
  <div class="boundprovince" v-show="show">
    <div class="close-box">
      <span class="close-btn" @click="closeFunc">关闭</span>
    </div>
    <div ref="keyBoardProvince" class="keyboard keyboard-province">
      <div class="item" style="margin-top: 0.02rem;">
        <a>京</a>
        <a>津</a>
        <a>沪</a>
        <a>渝</a>
        <a>冀</a>
        <a>豫</a>
        <a>云</a>
        <a>辽</a>
        <a>黑</a>
        <a>湘</a>
      </div>
      <div class="item">
        <a>皖</a>
        <a>鲁</a>
        <a>新</a>
        <a>苏</a>
        <a>浙</a>
        <a>赣</a>
        <a>鄂</a>
        <a>桂</a>
        <a>甘</a>
      </div>
      <div class="item">
        <a>晋</a>
        <a>蒙</a>
        <a>陕</a>
        <a>吉</a>
        <a>闽</a>
        <a>贵</a>
        <a>粤</a>
        <a>青</a>
      </div>
      <div class="item four">
        <a>藏</a>
        <a>川</a>
        <a>宁</a>
        <a>琼</a>
        <a>使</a>
        <div class="delete-box" @click="deleteFunc">
          <div class="delete"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'BoundProvince',
  components: {

  },
  data () {
    return {
      show: true,
      provinceKey: []
    }
  },
  computed: {
    ...mapState(['province'])
  },
  methods: {
    /*
    * 初始化a标签点击事件
    */
    initAevent () {
      let vm = this
      let _province = this.provinceKey
      for (let i = 0; i < _province.length; i++) {
        _province[i].index = i
        _province[i].addEventListener(
          'touchstart',
          function (e) {
            this.style.backgroundColor = '#898eab'
          }
        )
        _province[i].addEventListener(
          'touchend',
          function (e) {
            vm.$emit('input-cardid', this.innerText)
            this.style.backgroundColor = '#fff'
          }
        )
      }
    },
    // 关闭省份选择面板
    closeFunc () {
      this.provinceFunc(false)
    },
    // 删除省份
    deleteFunc () {
      this.$emit('input-cardid', '')
    },
    ...mapMutations(['provinceFunc'])
  },
  watch: {
    province (bool) {
      this.show = bool
    }
  },
  mounted () {
    this.provinceKey = this.$refs.keyBoardProvince.querySelectorAll('a')
    this.initAevent()
  }
}
</script>
