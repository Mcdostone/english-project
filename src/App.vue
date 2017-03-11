<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
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

#app {
  height: 100%;
  margin: 0;
}

.my-button {
  background-color: transparent;
  border: 2px solid white;

  &:hover {
    background: white;
    color: blue;
  }
}

.my-big-button {
  height: 30px;
}
</style>
