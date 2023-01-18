import { createStore } from 'vuex'
import Word from '@/data/words/wordCreation'
import wordsArray from '@/data/words/words.js'

export default createStore({
  state: {
    words: []
  },
  mutations: {
    restart (state) {
      state.words.sort(() => Math.random() - 0.5)
      state.words.forEach((i) => {
        i.result = ''
      })
    },
    setFirst (state) {
      state.words.forEach((i) => {
        i.isCurrent = false
      })
      state.words[0].isCurrent = true
      debugger
    },
    setCurrent (state, currentWord) {
      state.words.forEach((i, index) => {
        if (i.isCurrent && i.text === currentWord.text) {
          i.isCurrent = false
          state.words[index + 1].isCurrent = true
        }
      })
    },
    setResult (state, result) {
      state.words.forEach((i) => {
        if (i.isCurrent) {
          i.result = result
        }
      })
    },
    initWords (state) {
      wordsArray.forEach((i) => {
        const word = new Word(i)
        state.words.push(word)
      })
    }
  },
  actions: {
  },
  getters: {
    words (state) {
      return state.words
    },
    currentWord (state) {
      const words = state.words.find(i => i.isCurrent)
      return words
    },
    successWords (state) {
      const words = state.words.filter(i => i.result === 'success')
      return words.length
    },
    errorWords (state) {
      const words = state.words.filter(i => i.result === 'error')
      return words.length
    }
  }
})
