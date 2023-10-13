// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"s5OY":[function(require,module,exports) {
module.exports = "/01 - Way Out West - Muthafucka (Soundscape Mix).681c688f.mp3";
},{}],"YoI8":[function(require,module,exports) {
module.exports = "/02 - Chi-Ad - Tranquillicy.d356edf6.mp3";
},{}],"yOVK":[function(require,module,exports) {
module.exports = "/03 - Psychonaut - Spiritwalker.36904e53.mp3";
},{}],"SyTv":[function(require,module,exports) {
module.exports = "/04 - X-Dream - Out of Your Control.d5796543.mp3";
},{}],"rk9Y":[function(require,module,exports) {
module.exports = "/05 - Cosmosis - Afterglow.3fc67bf8.mp3";
},{}],"IEok":[function(require,module,exports) {
module.exports = "/06 - Mittelstandskinder Ohne Strom - Waterphone.cf6a1862.mp3";
},{}],"olqM":[function(require,module,exports) {
module.exports = "/07 - Fluffy Puppy - Christania Jay.264bf85e.mp3";
},{}],"RXUj":[function(require,module,exports) {
module.exports = "/08 - Mittelstandskinder Ohne Strom - Gone.94e8b45e.mp3";
},{}],"DwhM":[function(require,module,exports) {
module.exports = "/09 - X-Dream - Relaxed Vortex.0aaeb238.mp3";
},{}],"QNji":[function(require,module,exports) {
module.exports = "/10 - Sub6 - Raheya (Shulman Remix).556a012a.mp3";
},{}],"liFD":[function(require,module,exports) {
module.exports = "/11 - Psysex - Come in Peace (Reprise).931e7348.mp3";
},{}],"eDsD":[function(require,module,exports) {
"use strict";

var _WayOutWestMuthafuckaSoundscapeMix = _interopRequireDefault(require("../audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3"));
var _ChiAdTranquillicy = _interopRequireDefault(require("../audio/02 - Chi-Ad - Tranquillicy.mp3"));
var _PsychonautSpiritwalker = _interopRequireDefault(require("../audio/03 - Psychonaut - Spiritwalker.mp3"));
var _XDreamOutOfYourControl = _interopRequireDefault(require("../audio/04 - X-Dream - Out of Your Control.mp3"));
var _CosmosisAfterglow = _interopRequireDefault(require("../audio/05 - Cosmosis - Afterglow.mp3"));
var _MittelstandskinderOhneStromWaterphone = _interopRequireDefault(require("../audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3"));
var _FluffyPuppyChristaniaJay = _interopRequireDefault(require("../audio/07 - Fluffy Puppy - Christania Jay.mp3"));
var _MittelstandskinderOhneStromGone = _interopRequireDefault(require("../audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3"));
var _XDreamRelaxedVortex = _interopRequireDefault(require("../audio/09 - X-Dream - Relaxed Vortex.mp3"));
var _Sub6RaheyaShulmanRemix = _interopRequireDefault(require("../audio/10 - Sub6 - Raheya (Shulman Remix).mp3"));
var _PsysexComeInPeaceReprise = _interopRequireDefault(require("../audio/11 - Psysex - Come in Peace (Reprise).mp3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
new Vue({
  el: "#app",
  data: function data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [{
        name: "Muthafucka (Soundscape Mix)",
        artist: "Way Out West",
        source: _WayOutWestMuthafuckaSoundscapeMix.default
      }, {
        name: "Tranquillicy",
        artist: "Chi-A.D.",
        source: _ChiAdTranquillicy.default
      }, {
        name: "Spiritwalker",
        artist: "Psychonaut",
        source: _PsychonautSpiritwalker.default
      }, {
        name: "Out of Your Control",
        artist: "X-Dream",
        source: _XDreamOutOfYourControl.default
      }, {
        name: "Afterglow",
        artist: "Cosmosis",
        source: _CosmosisAfterglow.default
      }, {
        name: "Waterphone",
        artist: "Mittelstandskinder Ohne Strom",
        source: _MittelstandskinderOhneStromWaterphone.default
      }, {
        name: "Christania Jay",
        artist: "Fluffy Puppy",
        source: _FluffyPuppyChristaniaJay.default
      }, {
        name: "Gone",
        artist: "Mittelstandskinder Ohne Strom",
        source: _MittelstandskinderOhneStromGone.default
      }, {
        name: "Relaxed Vortex",
        artist: "X-Dream",
        source: _XDreamRelaxedVortex.default
      }, {
        name: "Raheya (Shulman Remix)",
        artist: "Sub6",
        source: _Sub6RaheyaShulmanRemix.default
      }, {
        name: "Come in Peace (Reprise)",
        artist: "Psysex",
        source: _PsysexComeInPeaceReprise.default
      }],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play: function play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime: function generateTime() {
      var width = 100 / this.audio.duration * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      var durmin = Math.floor(this.audio.duration / 60);
      var dursec = Math.floor(this.audio.duration - durmin * 60);
      var curmin = Math.floor(this.audio.currentTime / 60);
      var cursec = Math.floor(this.audio.currentTime - curmin * 60);
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
    updateBar: function updateBar(x) {
      var progress = this.$refs.progress;
      var player = this.$refs.player;
      var maxduration = this.audio.duration;
      var position = x - progress.offsetParent.offsetLeft - player.offsetLeft;
      var percentage = 100 * position / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = maxduration * percentage / 100;
      this.audio.play();
    },
    clickProgress: function clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack: function prevTrack() {
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
    nextTrack: function nextTrack() {
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
    resetPlayer: function resetPlayer() {
      var _this = this;
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(function () {
        if (_this.isTimerPlaying) {
          _this.audio.play();
        } else {
          _this.audio.pause();
        }
      }, 300);
    }
  },
  created: function created() {
    var vm = this;
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
    for (var index = 0; index < this.tracks.length; index++) {
      var element = this.tracks[index];
      var link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  }
});
},{"../audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3":"s5OY","../audio/02 - Chi-Ad - Tranquillicy.mp3":"YoI8","../audio/03 - Psychonaut - Spiritwalker.mp3":"yOVK","../audio/04 - X-Dream - Out of Your Control.mp3":"SyTv","../audio/05 - Cosmosis - Afterglow.mp3":"rk9Y","../audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3":"IEok","../audio/07 - Fluffy Puppy - Christania Jay.mp3":"olqM","../audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3":"RXUj","../audio/09 - X-Dream - Relaxed Vortex.mp3":"DwhM","../audio/10 - Sub6 - Raheya (Shulman Remix).mp3":"QNji","../audio/11 - Psysex - Come in Peace (Reprise).mp3":"liFD"}]},{},["eDsD"], null)
//# sourceMappingURL=/player.f7f8d2f1.js.map