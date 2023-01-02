<template>
    <Main class='main'/>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  components: { Main }
}
</script>

<style lang='sass' scoped>
@import '/src/assets/styles/reset.css'
@font-face
  font-family: Chakra Petch
  src: url(@/assets/fonts/ChakraPetch-Light.ttf)
*
  font-family: Chakra Petch
#app
  background-color: #FFFAFA
.main
    margin: 0 auto
    width: 100%
    height: 100vh
    background-color: #EAE6CA
</style>
