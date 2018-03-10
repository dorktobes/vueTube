
Vue.component('video-list', {
  props: {
  	videos: Array,
  },
  template: `<div class="video-list">
    <video-list-entry
      v-for="video in videos"
      :video="video"
      :key="video.id.videoId"
      ></video-list-entry>
  </div>`
})