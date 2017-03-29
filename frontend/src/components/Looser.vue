<template>
<div class="overlay looser">
  <div>
    <p>You loose !</p>
  </div>
  <div>
    <img :src="angry" alt="" style="height: 200px" class="octopus">
  </div>
</div>
</template>

<script>
import angry from '../assets/angry.gif';

export default {
  name: 'Looser',
  data() {
    return {
      angry,
      timeout: undefined,
    };
  },
  created() {
    document.body.style.overflow = 'hidden';
    this.timeout = setTimeout(() => {
      this.$router.push('/end');
    }, 4500);
  },
  destroyed() {
    document.body.style.overflow = 'initial';
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.looser {
  height: 100vh;
  width: 100%;
  background: #E57373;
  overflow: hidden;
  justify-content: center;
  z-index: 999;

  p {
    font-size: 6em;
 }
}
</style>
