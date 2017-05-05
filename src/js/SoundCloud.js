class SoundCloud {
  constructor(clientId, music) {
    this.clientId = clientId;
    this.music = music;

    SC.initialize({
      client_id: this.clientId
    })
  }

  load(trackUrl) {
    SC.get('/resolve', {url: trackUrl}, (sound) => {
      this.music.playStream(`${sound.stream_url}?client_id=${this.clientId}`);
    });
  }
}
