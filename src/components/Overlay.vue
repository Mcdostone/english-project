<template>
<div v-if="!finished" class="overlay">
  <div>
    <p>The game starts in</p>
    <p>{{countdown}}</p>
  </div>
  <div>
    <img :src="query" alt="" style="height: 200px">
  </div>

</div>
</template>

<script>
import query from '../assets/query.gif';

export default {
  name: 'Overlay',
  data() {
    return {
      finished: false,
      countdown: 3,
      query,
      timer: undefined,
    };
  },
  created() {
    this.timer = setInterval(() => {
      if (this.countdown === 0) {
        this.$emit('begin');
        this.finished = true;
      }
      this.countdown -= 1;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss">
.overlay {
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  background: #26a69a;
  right: 0;
  left: 0;
  bottom: 0;
}
.overlay div {
  text-align: center;
}
.overlay p {
  font-size: 6em;
  color: white;
  margin: 10px;
  font-weight: 100;
}
</style>
