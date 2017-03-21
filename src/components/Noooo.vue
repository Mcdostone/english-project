<template>
<div class="overlay">
  <div>
    <p>Nooo !</p>
  </div>
  <div>
    <img :src="angry" alt="" style="height: 200px">
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
    this.timeout = setTimeout(() => {
      this.cls = '';
      this.$emit('close');
    }, 1500);
  },
  destroyed() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
</style>
