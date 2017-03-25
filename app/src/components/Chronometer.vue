<template>
<div id="chronometer">
  <p>{{getMinutes}}:{{getSeconds}}</p>
</div>
</template>

<script>
export default {
  name: 'chronometer',
  props: ['stop'],
  data() {
    return {
      totalSeconds: 0,
      minutes: 0,
      seconds: 0,
      timer: undefined,
    };
  },
  computed: {
    getMinutes() {
      return (this.minutes < 10) ? `0${this.minutes}` : this.minutes;
    },

    getSeconds() {
      return (this.seconds < 10) ? `0${this.seconds}` : this.seconds;
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.totalSeconds += 1;
      this.minutes = Math.floor(this.totalSeconds / 60);
      this.seconds = this.totalSeconds - (this.minutes * 60);
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
    this.$store.dispatch('setChrono', this.totalSeconds);
  },
};
</script>

<style lang="scss">
</style>
