<template>
  <div>
    <Header />
    <router-view class='router'></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang='sass' scoped>
@import '/src/assets/styles/reset.css'
@font-face
  font-family: Chakra Petch
  src: url(@/assets/fonts/ChakraPetch-Light.ttf)
*
  font-family: Chakra Petch
</style>
