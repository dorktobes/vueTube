
Vue.component('video-list', {
  template: `<div className="video-list">
    <video-list-entry
      v-for:"video in videos"
      v-bind:video="video"
      v-bind:key="video.id"
  </div>`
})