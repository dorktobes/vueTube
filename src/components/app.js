let vm = new Vue({
  el: '#app',
  template: `  
        <div>
          <nav class="navbar">
            <div class="col-md-6 offset-md-3">
              <search></search>
            </div>
          </nav>
          <div class="row">
            <div class="col-md-7">
              <video-player
                :video="this.currentVideo"
               ></video-player>
            </div>
            <div class="col-md-5">
              <video-list
                :videos="this.videos"
              ></video-list>
            </div>
          </div>
        </div>`,
  data: {
    videos: [...exampleVideoData],
    currentVideo: exampleVideoData[0]
  },
  methods: {
    handleClick: function(video){
      this.currentVideo = video;
    }
  }
});
  