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
      ready: false,
    };
  },
  props: ['video'],
  watch: {
    /* eslint-disable no-unused-vars */
    video(vid, old) {
      if (vid.videoId === old.videoId) {
        console.log('change');
        this.loadVideo();
      } else {
        this.video = vid;
        this.loadVideo();
      }
    },
  },
  methods: {
    loadVideo() {
      const parts = this.video.split(',');
      parts.shift();
      /* eslint-disable max-len */
      if (this.ready && this.player !== undefined) {
        this.changeVideo(parts[0], parseInt(parts[1], 10), parts.length === 3 ? parseInt(parts[2], 10) : parseInt(parts[1], 10) + 7);
      } else {
        this.youtube.load((YT) => {
          this.player = new YT.Player('video', {
            width: '',
            height: '',
            events: {
              onReady: () => {
                this.ready = true;
                // document.getElementById('video').width = window.innerWidth;
                this.changeVideo(parts[0], parseInt(parts[1], 10), parts.length === 3 ? parseInt(parts[2], 10) : parseInt(parts[1], 10) + 7);
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
      }
    },
    changeVideo(videoId, start, end) {
      if (start > end) {
        /* eslint-disable no-param-reassign  */
        end = start + 7;
      }
      this.player.loadVideoById({
        videoId,
        startSeconds: start,
        endSeconds: end,
      });
    },

    playVideo() {
      if (this.player !== undefined && !this.played) {
        this.player.playVideo();
      }
    },
  },

  mounted() {
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
  width: 100%;
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
