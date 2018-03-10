
Vue.component('video-list-entry', {
  props: {
  	video: Object,
  },
  template: `<div class="video-list-entry media">
    <div class="media-left media-middle">
      <img class="media-object" :src="video.snippet.thumbnails.default.url" alt="" />
    </div>
    <div class="media-body">
      <div class="video-list-entry-title">{{video.snippet.title}}</div>
      <div class="video-list-entry-detail">{{video.snippet.description}}</div>
    </div>
  </div>`
})