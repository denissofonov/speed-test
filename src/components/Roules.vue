<template>
    <div class='roules'>
        <ul class='roules__list'>
            <p>Hello!</p>
            <li>The countdown will start when you write the first letter</li>
            <li>You are given a minute to write as quickly as possible the maximum number of words</li>
            <li>After one minute you will see your result</li>
            <li>You can try again by pressing restart</li>
            <router-link to='/test' class='roules__list__link'>Go!</router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Roules'
}
</script>

<style lang='sass' scoped>
.roules
    background-color: #EAE6CA
    height: calc(100vh - 80px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    font-size: 18px
    &__list
        display: flex
        align-items: center
        justify-content: center
        gap: 28px
        flex-direction: column
        p
            font-size: 26px
        &__link
            border-bottom: 1px solid
            border-color: black
            width: 26px
            font-size: 22px
        &__link:visited
            color: #140F0B
</style>
