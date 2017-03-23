<template class="">
<div class="visual">
  <div id="video"></div>
  <span @click="playVideo"></span>
</div>
</template>

<script>
import youtube from 'youtube-iframe';

export default {
  name: 'videoQuestion',
  data() {
    return {
      youtube,
      played: false,
      player: undefined,
    };
  },
  props: ['video'],
  watch: {
    /* eslint-disable no-unused-vars */
    video(vid, old) {
      this.loadVideo();
    },
  },
  methods: {
    loadVideo() {
      const parts = this.video.split(',');
      parts.shift();
      /* eslint-disable max-len */
      this.youtube.load((YT) => {
        this.player = new YT.Player('video', {
          events: {
            onReady: () => {
              this.player.loadVideoById({
                videoId: parts[0],
                startSeconds: parseInt(parts[1], 10),
                endSeconds: parts.length === 3 ? parseInt(parts[2], 10) : parseInt(parts[1], 10) + 7,
              });
            },
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PLAYING) {
                this.played = true;
              }
            },
          },
          playerVars: {
            showinfo: 1,
            controls: 0,
            rel: 0,
          },
        });
      });
    },

    playVideo() {
      if (this.player !== undefined && !this.played) {
        this.player.playVideo();
      }
    },
  },
  created() {
    this.loadVideo();
  },
};
</script>

<style lang="scss">

.video-container {
  background: red;
}
.visual {
  position: relative;
}
.visual iframe {
  height: inherit;
  max-height: 250px;
  height: 250px;
}

.visual span {
  position: absolute;
  content :'';
  background: red;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0);
}

</style>
