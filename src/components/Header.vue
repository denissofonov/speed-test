<!-- eslint-disable no-tabs -->
<template>
    <div class='header'>
      <nav class='header__nav'>
        <router-link to='/roules' class='header__nav__link'>Roules</router-link>
        <router-link to='/test' class='header__nav__link'>Test</router-link>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='sass' scoped>
.header
  height: 80px
  display: flex
  justify-content: center
  align-items: center
  background-color: #EAE6CA
  font-size: 18px
  &__nav
    display: flex
    gap: 20px
    color: #140F0B
    text-decoration: none
    &__link:visited
      color: #140F0B
 </style>
