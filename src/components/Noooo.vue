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
    this.timeout = setTimeout(() => {
      this.cls = '';
      this.$emit('close');
    }, 1000);
  },
  destroyed() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss">
.noooo {
  overflow: hidden;
}
</style>
