<template>
  <div id="app">
    <navbar></navbar>
    <transition enter-active-class="hellIn" leave-active-class="">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: { Navbar },
};
</script>

<style lang="scss">
</style>
