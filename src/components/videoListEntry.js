
Vue.component('video-list-entry', {
  props: {
  	video: Object,
  },
  template: `<div class="video-list-entry media">
    <div class="media-left media-middle">
      <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div>
    <div class="media-body">
      <div class="video-list-entry-title">video.snippet.title</div>
      <div class="video-list-entry-detail">Video Description</div>
    </div>
  </div>`
})