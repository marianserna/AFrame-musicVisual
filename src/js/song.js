AFRAME.registerComponent('song', {
  schema: {
    url: {type: 'string'}
  },

  init: function() {
    this.el.addEventListener('click', () => {
      window.soundCloud.load(this.data.url);
    });
  }
});
