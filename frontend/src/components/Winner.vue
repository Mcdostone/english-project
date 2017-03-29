<template>
<div class="overlay winner">
  <div>
    <p>You win !</p>
  </div>
  <div>
    <img :src="nice" alt="" style="height: 200px" class="octopus">
  </div>
</div>
</template>

<script>
import nice from '../assets/nice.gif';

export default {
  name: 'Winner',
  data() {
    return {
      nice,
      timeout: undefined,
    };
  },
  created() {
    document.body.style.overflow = 'hidden';
    this.timeout = setTimeout(() => {
      this.$router.push('/end');
    }, 3500);
  },
  destroyed() {
    document.body.style.overflow = 'initial';
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.winner {
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
