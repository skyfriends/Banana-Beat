'use strict';
const app = require('../app.js');

class Drum {
  constructor(name, sample) {
    this.context = audioContext;
    this.drumGain = audioContext.createGain();
    this.drumGain.gain.value = 0;
    this.name = name;
    this.sample = sample;
    this.playTriggers = new Array(16).fill(false);
    this.soundVolume = .5;
    this.muted = false;
  }

  playDrum() {
    var sound = new Audio(this.sample);
    sound.volume = this.soundVolume;
    sound.play();
    sound.muted = this.muted;
  }
}

module.exports = Drum;
