<template>
<div class="overlay noooo">
  <div>
    <p>Nooo !</p>
  </div>
  <div>
    <img :src="angry" alt="" style="height: 200px" class="octopus">
  </div>
</div>
</template>

<script>
import angry from '../assets/angry.gif';

export default {
  name: 'Noooo',
  data() {
    return {
      angry,
      timeout: undefined,
    };
  },
  created() {
    document.body.style.overflow = 'hidden';
    this.timeout = setTimeout(() => {
      // this.cls = '';
      // this.$emit('close');
    }, 1000);
  },
  destroyed() {
    document.body.style.overflow = 'initial';
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.noooo {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  z-index: 999;

  p {
    font-size: 6em;
 }
}
</style>
