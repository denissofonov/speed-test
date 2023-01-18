<template>
    <div class='test'>
        <h1 class='test__title'>Typing check</h1>
        <div class='test__text'>
          <div>
            <div v-for='(word , i) in words' :key='i' :class='{ current: isCurrent(word.isCurrent), error: word.result=== "error", success: word.result==="success" }'>
                {{word.text}}
            </div>
          </div>
          <div>
            <div v-for='(word , i) in words2' :key='i'>
                {{word.text}}
            </div>
          </div>
        </div>
        <div class='test__input'>
            <input v-model.trim='input' type='text' @keydown.space='check' :disabled='isFinish'>
        </div>
        <div> Timer: {{ time }}</div>
        <div class='test__button'>
            <button @click='restart'>Restart</button>
        </div>
        <div v-if='time === 0' class='test__result'>
          <div>You are typing {{ result }} words per minute.</div>
          <div>Mistakes: {{ errorWords }}</div>
          <div>Right: {{ successWords }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      input: '',
      time: 10,
      start: false,
      point: 0
    }
  },
  methods: {
    restart () {
      this.input = ''
      this.$store.commit('restart')
      this.$store.commit('setFirst')
      this.resetTimer()
    },
    check () {
      if (this.currentWord.text === this.input) {
        this.$store.commit('setResult', 'success')
      } else {
        this.$store.commit('setResult', 'error')
      }
      this.$store.commit('setCurrent', this.currentWord)
      this.input = ''
    },
    isCurrent (value) {
      return value
    },
    startTimer () {
      this.start = true
      this.interval = setInterval(() => {
        if (this.time > 0) {
          this.time -= 1
        }
      }, 1000)
    },
    resetTimer () {
      clearInterval(this.interval)
      this.time = 10
      this.start = false
    }
  },
  computed: {
    allWords () {
      return this.$store.getters.words
    },
    words () {
      return this.$store.getters.words.slice(this.point, this.point + 10)
    },
    words2 () {
      return this.$store.getters.words.slice(this.point + 10, this.point + 20)
    },
    isCompleted () {
      if (this.words.length && this.words.every(i => i.result)) {
        return true
      }
      return false
    },
    isFinish () {
      if (this.time === 0) {
        return true
      } else {
        return false
      }
    },
    currentWord () {
      return this.$store.getters.currentWord
    },
    successWords () {
      return this.$store.getters.successWords
    },
    errorWords () {
      return this.$store.getters.errorWords
    },
    result () {
      return this.successWords + this.errorWords
    }
  },
  watch: {
    input () {
      if (this.start === false && this.input !== '') {
        this.startTimer()
      }
    },
    isCompleted () {
      if (this.words.every(i => i.result)) {
        this.point += 10
        debugger
      }
    }
  },
  mounted () {
    this.$store.commit('initWords')
    this.restart()
  }
}
</script>

<style lang='sass'>
.test
    width: 100%
    height: calc(100vh - 80px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 20px
    background-color: #EAE6CA
    color: #140F0B
    &__title
      font-size: 26px
      padding: 10px 10px 20px 10px
    &__text
        display: flex
        flex-direction: column
        gap: 5px
        div
          display: flex
          justify-content: center
          flex-direction: row
          padding: 5px
          border-radius: 5px
          gap: 4px
          font-size: 18px
          font-family: Chakra Petch
    &__input
      border-radius: 5px
      height: 40px
      font-size: 18px
      border: 1px solid
      padding: 7px 10px 5px 10px
    &__result
      display: flex
      flex-direction: column
      font-size: 18px
.current
    background-color: #bdbebd
.error
  background-color: #cf7986
.success
  background-color: #BDECB6
</style>
