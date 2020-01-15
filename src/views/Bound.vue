<style scoped>
  @import '~@/assets/styles/css/Bound.css';
</style>
<template>
  <div class="bound list-cell">
    <div class="mybtn" style="background:none; text-align: left; color: #888;">请输入车牌号</div>
    <ul ref="cardId">
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[0] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[1] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[2] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[3] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[4] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[5] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span>{{ this.cardIdObj[6] }}</span>
      </li>
      <li>
        <i class="cursor-box">
          <div class="cursor"></div>
        </i>
        <span v-if="cardIdObj[7] !== ''">{{ this.cardIdObj[7] }}</span>
        <span v-else style="color: #ccc; font-size: 12px;">新能源</span>
      </li>
    </ul>
    <button class="mybtn mybtn-primary" style="width:100%;margin-top:80px" @click="submitCarNumber">添加车辆</button>
    <bound-province :show="provinceVisible" @input-cardid="cardProvinceFunc"></bound-province>
    <bound-card-number :show="cardNumberVisible" @input-cardid="cardNumberFunc"></bound-card-number>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BoundProvince from '@/components/bound/BoundProvince'
import BoundCardNumber from '@/components/bound/BoundCardNumber'

export default {
  name: 'Bound',
  components: {
    BoundProvince,
    BoundCardNumber
  },
  data () {
    return {
      cardIdObj: {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: ''
      },
      provinceVisible: true,
      cardNumberVisible: true,
      idListArr: [],
      keyPos: 0 // 记录当前的光标位置，方便删除操作
    }
  },
  computed: {
    ...mapState(['province', 'cardnumber', 'cursorpos'])
  },
  methods: {
    /*
    * 初始化清空所有光标
    */
    initialCursor () {
      for (let i = 0; i < this.idListArr.length; i++) {
        this.idListArr[i].querySelector('.cursor-box').style.display = 'none'
      }
    },
    cardProvinceFunc (data) {
      this.initialCursor()
      this.cardIdObj[0] = data
      if (data !== '') {
        this.keyPos = 1
        this.cardNumFunc(true)
        this.provinceFunc(false)
        this.idListArr[0].querySelector('.cursor-box').style.left = '80%'
        this.idListArr[0].querySelector('.cursor-box').style.display = 'none'
        this.idListArr[1].querySelector('.cursor-box').style.display = 'block'
      } else {
        this.keyPos = 0
        this.cardNumFunc(false)
        this.provinceFunc(true)
        this.idListArr[0].querySelector('.cursor-box').style.left = '50%'
        this.idListArr[0].querySelector('.cursor-box').style.display = 'block'
        this.idListArr[1].querySelector('.cursor-box').style.display = 'none'
      }
      /* 在store中存储光标的位置 */
      this.cursorPosFunc(this.keyPos)
    },
    cardNumberFunc (data) {
      /* 如果光标在1的位置，
      * 则表示此时是在输入车牌的第一个字母，
      * 此时键盘上的数字需要变灰
      */
      this.initialCursor()
      /*
      * 在删除数据的时候,如果光标在文字后面（同一方格内，则删除当前方格内的文字）
      * 判断标准，即，光标的left值为80%
      */
      /* 获取光标的left值 */
      let _cursorpos = this.idListArr[this.keyPos].querySelector('.cursor-box').style.left

      if (data !== '') {
        this.cardIdObj[this.keyPos] = data
        /*
        * 判断下一位会不会溢出
        * 如果会，则光标保留在当前位置
        * 如果不会，在将光标移到下一位
        */
        if (this.cardIdObj[this.keyPos + 1] !== undefined) {
          this.keyPos += 1
        } else {
          this.idListArr[this.keyPos].querySelector('.cursor-box').style.left = '80%'
        }
        let _temp = this.keyPos
        this.idListArr[_temp - 1].querySelector('.cursor-box').style.left = '80%'
        this.idListArr[_temp - 1].querySelector('.cursor-box').style.display = 'none'
        this.idListArr[_temp].querySelector('.cursor-box').style.display = 'block'
      } else {
        /*
        * 判断上一位会不会溢出
        * 如果会，则光标保留在当前位置
        * 如果不会，在将光标移到上一位
        * this.cardIdObj[this.keyPos-1] !== undefined
        */
        let _temp = this.keyPos
        /* 判断如果不是在文字的右侧，则和正常删除一样 */
        if (_cursorpos !== '80%' && this.cardIdObj[this.keyPos - 1] !== undefined) {
          this.keyPos -= 1
          _temp = this.keyPos
          this.idListArr[_temp + 1].querySelector('.cursor-box').style.display = 'none'
          this.idListArr[_temp].querySelector('.cursor-box').style.display = 'block'
        }

        this.cardIdObj[this.keyPos] = data
        if (_temp === 0) {
          this.cardNumFunc(false)
          this.provinceFunc(true)
        }
        this.idListArr[_temp].querySelector('.cursor-box').style.left = '50%'
        this.idListArr[_temp].querySelector('.cursor-box').style.display = 'block'
      }
      /* 在store中存储光标的位置 */
      this.cursorPosFunc(this.keyPos)
    },
    closeCursor () {
      if (this.province === false && this.cardnumber === false) {
        for (let i = 0; i < this.idListArr.length; i++) {
          this.idListArr[i].querySelector('.cursor-box').style.display = 'none'
        }
      }
    },
    cardIdObj2String () {
      let str = ''
      for (let key in this.cardIdObj) {
        str += this.cardIdObj[key]
      }
      return str
    },
    /**
     * 提交车牌号
     */
    submitCarNumber () {
      console.log('车牌号：', this.cardIdObj2String())
      alert('车牌号：' + this.cardIdObj2String())
    },
    ...mapMutations(['provinceFunc', 'cardNumFunc', 'cursorPosFunc'])
  },
  watch: {
    /*
    * 省份选择面板状态监听
    */
    province (obj) {
      this.closeCursor()
    },
    /*
    * 车牌号选择面板监听
    */
    cardnumber (obj) {
      this.closeCursor()
    }
  },
  mounted () {
    let vm = this
    let idList = this.$refs.cardId.querySelectorAll('li')
    this.idListArr = idList
    /*
    * 初始默认开启第一个省份选择光标
    */
    idList[0].querySelector('.cursor-box').style.display = 'block'
    for (let i = 0; i < idList.length; i++) {
      idList[i].index = i
      idList[i].addEventListener(
        'touchend',
        function (e) {
          /*
          * 存储光标位置
          */
          let _p = vm.keyPos = this.index
          /* 在store中存储光标的位置 */
          vm.cursorPosFunc(vm.keyPos)
          /*
          * 如果是第一个空，下标为0，则弹出输入省份的键盘
          */
          vm.provinceFunc(false)
          vm.cardNumFunc(false)
          if (_p === 0) {
            vm.provinceFunc(true)
          } else if (_p === 1) {
            /*
            * 选择第一个字母，并开启数字键盘
            */
            console.log('选择第一个字母，并开启数字键盘')
            vm.cardNumFunc(true)
          } else if (_p === 6 || _p === 6) {
            /*
            * 选择最后两个字母，并开启数字键盘
            * 最后两个字母或数字可以使用中文小键盘弹出层
            */
            console.log('选择最后两个个字母，并开启数字键盘')
            vm.cardNumFunc(true)
          } else {
            /*
            * 选择中间部分的数字或字母
            * 中间部分会默认关闭中文小字的提示
            */
            console.log('选择中间部分')
            vm.cardNumFunc(true)
          }
          vm.initialCursor()
          /*
          * 如果点击位置的数据不为空
          * 则将光标移动到中间位置
          */
          if (vm.cardIdObj[_p] === '') {
            this.querySelector('.cursor-box').style.left = '50%'
          }
          this.querySelector('.cursor-box').style.display = 'block'
        }
      )
    }
  }
}
</script>
