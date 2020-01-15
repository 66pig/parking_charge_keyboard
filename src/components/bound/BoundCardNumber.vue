<style scoped>
.boundcardnumber {
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
/*
* 选择第二个字母时键盘的状体啊
*/
.second-num-status .num, .second-num-status .letter{
  color: #eee;
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
  margin-left: .025rem;
  border-radius: 4px;
  width: calc((100%/10 - 3%)*2);
}
.delete {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA1MiA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPuWIoOmZpDwvdGl0bGU+PGRlZnM+PHBhdGggZD0iTTUgMGg0MWE1IDUgMCAwIDEgNSA1djMyLjVhNSA1IDAgMCAxLTUgNUg1YTUgNSAwIDAgMS01LTVWNWE1IDUgMCAwIDEgNS01eiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii0xJSIgeT0iLTEuMiUiIHdpZHRoPSIxMDIlIiBoZWlnaHQ9IjEwNC43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuNTI1NDkwMTk2IDAgMCAwIDAgMC41MzcyNTQ5MDIgMCAwIDAgMCAwLjU1Njg2Mjc0NSAwIDAgMCAxIDAiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0E4QjBCRCIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTEuMjAzIDIxLjMzOGExIDEgMCAwIDAgLjAxMyAxLjIyNWw2Ljc2OCA4LjU1N2ExIDEgMCAwIDAgLjc4NS4zOGgxOS4zNGEzIDMgMCAwIDAgMy0zVjE1YTMgMyAwIDAgMC0zLTNIMTguNzhhMSAxIDAgMCAwLS43OTcuMzk2bC02Ljc4IDguOTQyeiIgc3Ryb2tlPSIjMTcxODFEIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjkuNDUgMjEuNTQ2bDIuNzggMi44MjNhMSAxIDAgMCAxLTEuNDI1IDEuNDA0bC0yLjc4LTIuODIzLTIuODIzIDIuNzhhMSAxIDAgMCAxLTEuNDA0LTEuNDI1bDIuODIzLTIuNzgtMi43OC0yLjgyM2ExIDEgMCAwIDEgMS40MjUtMS40MDRsMi43OCAyLjgyMyAyLjgyMy0yLjc4YTEgMSAwIDAgMSAxLjQwNCAxLjQyNWwtMi44MjMgMi43OHoiIGZpbGw9IiMxNzE4MUQiLz48L2c+PC9nPjwvc3ZnPg==) no-repeat 90%;
  height: 100%;
  background-position: center;
  background-size: auto 100%;
}
.chinese-box {
  width: 1.57rem;
  height: .6rem;
  position: absolute;
  top: 0;
  right: 0rem;
  background:
  url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMTU3IDYzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT7lvLk8L3RpdGxlPjxwYXRoIGQ9Ik0xNDYgNTUuNWwtNy41IDctNy41LTdINmE2IDYgMCAwIDEtNi02VjZhNiA2IDAgMCAxIDYtNmgxNDVhNiA2IDAgMCAxIDYgNnY0My41YTYgNiAwIDAgMS02IDZoLTV6IiBmaWxsPSIjMTcxODFEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+) no-repeat center;
  background-size: 98%;
}
.chinese {
  width: 100%;
  position: absolute;
  top: 0;
  right: -2.22rem;
}
</style>
<template>
  <div class="boundcardnumber" v-show="show">
    <div class="close-box">
      <span class="close-btn" @click="closeFunc">关闭</span>
    </div>
    <div ref="keyBoardCardNumber" class="keyboard keyboard-cardid">
      <div v-show="chineseOnOff">
        <span class="chinese-box"></span>
        <span class="chinese">
          <a>港</a>
          <a>澳</a>
          <a>学</a>
          <a>领</a>
        </span>
      </div>
      <div class="item second-num-status" style="margin-top: 0.02rem;">
        <a class="num">1</a>
        <a class="num">2</a>
        <a class="num">3</a>
        <a class="num">4</a>
        <a class="num">5</a>
        <a class="num">6</a>
        <a class="num">7</a>
        <a class="num">8</a>
        <a class="num">9</a>
        <a class="num">0</a>
      </div>
      <div class="item second-num-status">
        <a>Q</a>
        <a>W</a>
        <a>E</a>
        <a>R</a>
        <a>T</a>
        <a>Y</a>
        <a>U</a>
        <a>O</a>
        <a>P</a>
        <a class="letter">字</a>
      </div>
      <div class="item">
        <a>A</a>
        <a>S</a>
        <a>D</a>
        <a>F</a>
        <a>G</a>
        <a>H</a>
        <a>J</a>
        <a>K</a>
        <a>L</a>
      </div>
      <div class="item four">
        <a>Z</a>
        <a>X</a>
        <a>C</a>
        <a>V</a>
        <a>B</a>
        <a>N</a>
        <a>M</a>
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
  name: 'BoundCardNumber',
  components: {

  },
  data () {
    return {
      show: false,
      cardnumberKey: [],
      cardnumberBox: [],
      chineseOnOff: false
    }
  },
  computed: {
    ...mapState(['cardnumber', 'cursorpos'])
  },
  methods: {
    /*
    * 初始化a标签点击事件
    */
    initAevent () {
      let vm = this
      let _province = this.cardnumberKey
      for (let i = 0; i < _province.length; i++) {
        _province[i].index = i
        _province[i].addEventListener(
          'touchstart',
          function (e) {
            this._v = this.innerText
            this.style.backgroundColor = '#898eab'
          }
        )
        _province[i].addEventListener(
          'touchend',
          function (e) {
            /*
            * 按钮恢复原状
            */
            this.style.backgroundColor = '#fff'
            /*
            * 判断输入的是否为字母
            * 如果不是字母则过滤掉输入的值
            * 因为车牌第二位必须为字母
            */
            vm.chineseOnOff = false
            if (vm.cardnumberBox[0].className.indexOf('second-num-status') > -1) {
              let _re = (/[a-z]/i).test(this._v) // 判断是否为字母的正则
              if (!_re) {
                return
              }
            }
            /*
            * 在文字为灰色的时候，证明此时不能输入文字
            */
            let _re = (/[a-z0-9]/i).test(this._v) // 判断是否为字母或数字的正则
            if (vm.cardnumberBox[1].className.indexOf('second-num-status') > -1) {
              if (!_re) {
                return
              }
            } else {
              /* 如果“字”不是灰色，且点击的不是数字或字母，则开启中文键盘 */
              if (!_re) {
                vm.chineseOnOff = true
                if (this._v === '字') {
                  return
                }
              }
            }
            vm.$emit('input-cardid', this._v)
          }
        )
      }
    },
    // 关闭车牌选择面板
    closeFunc () {
      this.cardNumFunc(false)
    },
    // 删除车牌号
    deleteFunc () {
      this.$emit('input-cardid', '')
    },
    ...mapMutations(['cardNumFunc', 'cursorPosFunc'])
  },
  watch: {
    cardnumber (bool) {
      this.show = bool
    },
    cursorpos (pos) {
      /*
      * 判断当前光标的位置，如果光标在第二个格子内
      * 则表示此时只能输入字母，数字则变灰
      */
      if (parseInt(pos) === 0 || parseInt(pos) === 1) {
        this.cardnumberBox[0].className = 'item second-num-status'
        this.cardnumberBox[1].className = 'item second-num-status'
      } else if (pos === 6 || pos === 7) {
        this.cardnumberBox[0].className = 'item'
        this.cardnumberBox[1].className = 'item'
      } else {
        this.cardnumberBox[0].className = 'item'
        this.cardnumberBox[1].className = 'item second-num-status'
      }
      /*
      * 判断如果光标又任何动静，且文字为灰色状态
      * 则关闭中文
      */
      if (this.cardnumberBox[1].className.indexOf('second-num-status') > -1) {
        this.chineseOnOff = false
      }
    }
  },
  mounted () {
    this.cardnumberKey = this.$refs.keyBoardCardNumber.querySelectorAll('a') // 获取键盘上的所有按键对象
    this.cardnumberBox = this.$refs.keyBoardCardNumber.querySelectorAll('.item') // 获取数字键盘每一行的对象
    this.initAevent()
  }
}
</script>
