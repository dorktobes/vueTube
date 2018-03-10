Vue.component('video-player', {
	props: {
		video: Object,
	},	
	template: ` 
	<div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rV4UqmbzIq4?autoplay=1" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{video.snippet.title}}</h3>
      <div>{{video.snippet.description}}</div>
    </div>
  </div>`
})