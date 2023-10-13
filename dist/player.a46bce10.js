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
})({"audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3":[function(require,module,exports) {
module.exports = "/01 - Way Out West - Muthafucka (Soundscape Mix).3ba3cc66.mp3";
},{}],"audio/02 - Chi-Ad - Tranquillicy.mp3":[function(require,module,exports) {
module.exports = "/02 - Chi-Ad - Tranquillicy.97a9efb0.mp3";
},{}],"audio/03 - Psychonaut - Spiritwalker.mp3":[function(require,module,exports) {
module.exports = "/03 - Psychonaut - Spiritwalker.7a846d02.mp3";
},{}],"audio/04 - X-Dream - Out of Your Control.mp3":[function(require,module,exports) {
module.exports = "/04 - X-Dream - Out of Your Control.52afe6bb.mp3";
},{}],"audio/05 - Cosmosis - Afterglow.mp3":[function(require,module,exports) {
module.exports = "/05 - Cosmosis - Afterglow.5c88a5ab.mp3";
},{}],"audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3":[function(require,module,exports) {
module.exports = "/06 - Mittelstandskinder Ohne Strom - Waterphone.3e99d7ca.mp3";
},{}],"audio/07 - Fluffy Puppy - Christania Jay.mp3":[function(require,module,exports) {
module.exports = "/07 - Fluffy Puppy - Christania Jay.202ca605.mp3";
},{}],"audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3":[function(require,module,exports) {
module.exports = "/08 - Mittelstandskinder Ohne Strom - Gone.bfd79f22.mp3";
},{}],"audio/09 - X-Dream - Relaxed Vortex.mp3":[function(require,module,exports) {
module.exports = "/09 - X-Dream - Relaxed Vortex.feab2928.mp3";
},{}],"audio/10 - Sub6 - Raheya (Shulman Remix).mp3":[function(require,module,exports) {
module.exports = "/10 - Sub6 - Raheya (Shulman Remix).2f4f4f2d.mp3";
},{}],"audio/11 - Psysex - Come in Peace (Reprise).mp3":[function(require,module,exports) {
module.exports = "/11 - Psysex - Come in Peace (Reprise).cefe28a6.mp3";
},{}],"js/player.js":[function(require,module,exports) {
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
},{"../audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3":"audio/01 - Way Out West - Muthafucka (Soundscape Mix).mp3","../audio/02 - Chi-Ad - Tranquillicy.mp3":"audio/02 - Chi-Ad - Tranquillicy.mp3","../audio/03 - Psychonaut - Spiritwalker.mp3":"audio/03 - Psychonaut - Spiritwalker.mp3","../audio/04 - X-Dream - Out of Your Control.mp3":"audio/04 - X-Dream - Out of Your Control.mp3","../audio/05 - Cosmosis - Afterglow.mp3":"audio/05 - Cosmosis - Afterglow.mp3","../audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3":"audio/06 - Mittelstandskinder Ohne Strom - Waterphone.mp3","../audio/07 - Fluffy Puppy - Christania Jay.mp3":"audio/07 - Fluffy Puppy - Christania Jay.mp3","../audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3":"audio/08 - Mittelstandskinder Ohne Strom - Gone.mp3","../audio/09 - X-Dream - Relaxed Vortex.mp3":"audio/09 - X-Dream - Relaxed Vortex.mp3","../audio/10 - Sub6 - Raheya (Shulman Remix).mp3":"audio/10 - Sub6 - Raheya (Shulman Remix).mp3","../audio/11 - Psysex - Come in Peace (Reprise).mp3":"audio/11 - Psysex - Come in Peace (Reprise).mp3"}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62551" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/player.js"], null)
//# sourceMappingURL=/player.a46bce10.js.map