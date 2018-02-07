
Vue.component('video-list', {
  props: {
  	videos: Array,
  },
  template: `<div class="video-list">
    <video-list-entry></video-list-entry>
    <video-list-entry></video-list-entry>
    <video-list-entry></video-list-entry>
    <video-list-entry></video-list-entry>
    <video-list-entry></video-list-entry>
  </div>`
})