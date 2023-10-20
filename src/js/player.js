import track_1 from '../audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3';
import track_2 from '../audio/02 - Chi-Ad - Tranquillicy.mp3';
import track_3 from '../audio/03 - Psychonaut - Spiritwalker.mp3';
import track_4 from '../audio/04 - X-Dream - Out of Your Control.mp3';
import track_5 from '../audio/05 - Cosmosis - Afterglow.mp3';
import track_6 from '../audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3';
import track_7 from '../audio/07 - Fluffy Puppy - Christania Jay.mp3';
import track_8 from '../audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3';
import track_9 from '../audio/09 - X-Dream - Relaxed Vortex.mp3';
import track_10 from '../audio/10 - Sub6 - Raheya (Shulman Remix).mp3';
import track_11 from '../audio/11 - Psysex - Come in Peace (Reprise).mp3';

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
          source: track_1,
        },
        {
          name: "Tranquillicy",
          artist: "Chi-A.D.",
          source: track_2,
        },
        {
          name: "Spiritwalker",
          artist: "Psychonaut",
          source: track_3,
        },
        {
          name: "Out of Your Control",
          artist: "X-Dream",
          source: track_4,
        },
        {
          name: "Afterglow",
          artist: "Cosmosis",
          source: track_5,
        },
        {
          name: "Waterphone",
          artist: "Mittelstandskinder Ohne Strom",
          source: track_6,
        },
        {
          name: "Christania Jay",
          artist: "Fluffy Puppy",
          source: track_7,
        },
        {
          name: "Gone",
          artist: "Mittelstandskinder Ohne Strom",
          source: track_8,
        },
        {
          name: "Relaxed Vortex",
          artist: "X-Dream",
          source: track_9,
        },
        {
          name: "Raheya (Shulman Remix)",
          artist: "Sub6",
          source: track_10,
        },
        {
          name: "Come in Peace (Reprise)",
          artist: "Psysex",
          source: track_11,
        },
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
      this.duration = (durmin ? durmin : '--') + ":" + (dursec ? dursec : '--');
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
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.resetAudio();

      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    closePlayer() {
      const startPlayerBtn = document.querySelector('.button-start');
      const playerLayer = document.querySelector('.player-layer');

      playerLayer?.classList.remove('show');
      startPlayerBtn?.classList.remove('is-hidden');
      playerLayer.classList.add('player-layer--pointer');

      this.currentTrack = this.tracks[0];
      this.resetAudio();
      this.isTimerPlaying = false;
    },
    collapsePlayer() {
      const player = document.querySelector('.player');
      const collapsePlayer = document.querySelector('.collapse-player');

      player.classList.add('player--collapse');
      collapsePlayer.classList.add('show');
    },
    resetAudio() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
    },
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
  }
});