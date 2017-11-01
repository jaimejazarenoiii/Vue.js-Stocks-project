<template>
  <div class="container">
    <app-header></app-header>
    <div>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode='out-in'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
    export default {
      components: {
        appHeader: Header
      },
      created() {
        this.$store.dispatch('initStocks');
      }
    }
</script>

<style>

</style>
