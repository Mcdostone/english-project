<template>
  <div id="app">
    <router-link :to="{name: 'root'}" id="logo-shadow">
      <span class="logo"></span>
    </router-link>

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

#logo-shadow {
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  span {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
