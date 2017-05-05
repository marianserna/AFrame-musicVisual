AFRAME.registerComponent('pulse', {
  schema: {
    frequency: {type: 'number'}
  },

  init: function () {},

  tick: function() {
    const freqVolume = window.music.streamData[this.data.frequency];
    const freqScale = (freqVolume / 8) + 0.5;
    this.el.setAttribute('scale', `${freqScale} ${freqScale} ${freqScale}`);

    const material = this.el.object3D.children[0].material;
    material.color.setHSL(freqVolume / 256, 1, 0.5);
  }
});
