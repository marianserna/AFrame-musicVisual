class Music {
  constructor() {
    this.audio = document.querySelector('audio');
    this.audioCtx = new (window.AudioContext || window.webkit.AudioContext);
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 256;

    this.source = this.audioCtx.createMediaElementSource(this.audio);
    this.source.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);

    this.streamData = new Uint8Array(256);
  }

  playStream(streamUrl) {
    this.audio.crossOrigin = 'anonymous';
    this.audio.setAttribute('src', streamUrl);
    this.audio.play();
  }

  sample() {
    this.analyser.getByteFrequencyData(this.streamData);
  }
}
