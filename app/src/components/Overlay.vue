<template>
<div v-if="!finished" class="overlay">
  <div>
    <p>The game starts in</p>
    <p>{{countdown}}</p>
  </div>
  <div>
    <img v-for="(image, index) in images" :src="image" alt="" class="octopus loading" :class="{bubble: index !== 0}">
  </div>

</div>
</template>

<script>
import query from '../assets/query.gif';
import nice from '../assets/nice.gif';
import load from '../assets/load.gif';
import angry from '../assets/angry.gif';

export default {
  name: 'Overlay',
  data() {
    return {
      finished: false,
      countdown: 3,
      images: [query],
      timer: undefined,
    };
  },
  created() {
    document.body.style.overflow = 'hidden';
    this.images.push(nice);
    this.timer = setInterval(() => {
      if (this.countdown === 1) {
        this.$emit('begin');
        this.finished = true;
      }
      if (this.countdown === 3) {
        this.images.push(angry);
      }
      if (this.countdown === 2) {
        this.images.push(load);
      }
      this.countdown -= 1;
    }, 1000);
  },
  destroyed() {
    document.body.style.overflow = 'initial';
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
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background: #26a69a;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.overlay div {
  text-align: center;
}

.overlay .octopus {
  border-radius: 50%;
}
.overlay p {
  font-size: 6em;
  color: white;
  margin: 10px;
  font-weight: 100;
}

.loading {
  position: fixed;
  bottom: 5%;
  transform: translateX(-50%);
  border-radius: 50%;
  height: 200px
}
</style>
