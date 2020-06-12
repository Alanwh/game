<template>
  <div id="app">
    <div class="header" />
    <div class="share" />
    <div class="instruction" />
    <div class="gift">
      <div :class="['island', 'island-' + n, {active: index === n}]" v-for="n in 8" :key="n">
        <div class="small-arrow small-arrow-1" v-if="shows[n-1][0]" />
        <div class="small-arrow small-arrow-2" v-if="shows[n-1][1]" />
        <div class="small-arrow small-arrow-3" v-if="shows[n-1][2]" />
      </div>
    </div>
    <div class="times">10</div>
    <div :class="['arrow', { hasSend }]" />
    <div class="active-arrow animated bounceInUp" v-if="hasSend" />
    <div class="footer">
      <div class="once" @click="send(1)" />
      <div class="tenth" @click="send(10)" />
    </div>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Game',
  data () {
    return {
      hasSend: false,
      index: 0, // 控制8个商品的当前active
      times: 0, // 控制10个奖品射箭次数
      result: [2, 4, 7, 3, 5, 3, 1, 5, 4, 3],
      shows: Array.from({ length: 8 }).map(() => [])
    }
  },
  methods: {
    send (time) {
      this.times = 0
      this.hasSend = true
      this.rollGame(this.times)
      this.times++
      const timer3 = setInterval(() => {
        this.rollGame(this.times)
        this.times++
        this.times > 9 && clearInterval(timer3)
      }, 1350)
    },
    rollGame (n) {
      const reward = this.result[n]
      this.index = 0
      const timer = setInterval(() => {
        if (this.index === reward) {
          clearInterval(timer)
          this.shows[this.index - 1].push(true)
          setTimeout(() => {
            const timer2 = setInterval(() => {
              this.index++
              this.index > 9 && clearInterval(timer2)
            }, 100)
          }, 150)
        } else {
          this.index++
        }
      }, 100)
    }
  }
}
</script>

<style lang="scss">
@import './style/reset.scss';
@import './style/index.scss';
</style>
