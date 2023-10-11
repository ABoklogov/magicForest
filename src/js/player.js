import WayOutWest from '../audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3';


new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Muthafucka (Soundscape Mix)",
          artist: "Way Out West",
          // cover: "https://i.discogs.com/TI9fNIwxEr-cYGUdvLrb7Cq-ooQZc0Wans6Wacj29DA/rs:fit/g:sm/q:90/h:460/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNDM2/Mi0xMTY4NzcwNDQ2/LmpwZWc.jpeg",
          // source: "https://oxy.sunproxy.net/file/SUsvSEtsdEJlNndmWHMwQUc3Zkd6NCtiMU9xSEx1dmtRUXBwVVhmUDdldWsxYzdUL3UwTVJwRVR0ZDlzYk5USXBvTDRadGt6SUVkd1NSWVFQVmltangwczJvcXBDSEFBRDhDNExvV1hxZmc9/Way_Out_West_-_Muthafucka_Soundscape_Rmx_(Vuxo7.com).mp3",
          source: WayOutWest,
          url: "https://www.youtube.com/watch?v=GtcKN6w_B1k",
          favorited: false
        },
        // {
        //   name: "Tranquillicy",
        //   artist: "Chi-A.D.",
        //   source: "https://oxy.sunproxy.net/file/SUsvSEtsdEJlNndmWHMwQUc3Zkd6NCtiMU9xSEx1dmtRUXBwVVhmUDdldDFMaCtrZmNDcm5BSTdzTVRnOThuQ2lieDZVYmtKbmg5d085bmh6SVoyZ1QzdERhcG5yNjBETDNaVFZieWZielU9/Chi-A.D._-_Tranquillicy_(Vuxo7.com).mp3",
        //   url: "https://www.youtube.com/watch?v=vSQzEDX6v1s",
        //   favorited: true
        // },
        // {
        //   name: "Spiritwalker",
        //   artist: "Psychonaut",
        //   source: "https://oxy.sunproxy.net/file/SUsvSEtsdEJlNndmWHMwQUc3Zkd6NCtiMU9xSEx1dmtRUXBwVVhmUDdldjJJcjdQWUhISmE0NVhUQjA3eVJ3ZzBWTmJHWmxROUQ5bEF6cFdRU1RBTFZPTWR2a2pIcnJuRk90d3EzVVY4ckE9/psychonaut_-_spiritwalker_(Vuxo7.com).mp3",
        //   url: "https://www.youtube.com/watch?v=lBj-bL3gvTI",
        //   favorited: false
        // },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;

      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let player = this.$refs.player;
      let maxduration = this.audio.duration;

      let position = (x - progress.offsetParent.offsetLeft - player.offsetLeft);
      let percentage = ((100 * position) / progress.offsetWidth);
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;

    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});