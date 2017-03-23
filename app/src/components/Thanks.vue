<template>
<div class="thanks">
  <p class="animated zoomIn" style="animation-delay: 0.5s;">Thanks :)</p>
</div>
</template>

<script>
// import angry from '../assets/angry.gif';

export default {
  name: 'Overlay',
  data() {
    return {
      countdown: 3,
      timer: undefined,
    };
  },
  created() {
    this.timer = setTimeout(() => this.$router.push('/'), 3000);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss">

.thanks {
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #26a69a;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  p {
    font-size: 6em;
    font-weight: 100;
    color: white;
  }
}


</style>
