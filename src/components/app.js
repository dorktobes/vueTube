// let data = {videos: exampleVideoData, currentVideo: exampleVideoData[0]};
// let vm = new Vue({ data })
//properties manually added to the 'vm' after instantiation won't be reactive


Vue.component('app', {
  template: `  
        <div>
          <nav class="navbar">
            <div class="col-md-6 offset-md-3">
              <search></search>
            </div>
          </nav>
          <div class="row">
            <div class="col-md-7">
              <video-player ></video-player>
            </div>
            <div class="col-md-5">
              <video-list></video-list>
            </div>
          </div>
        </div>`
});

let vm = new Vue({
  el: '#app',
  data: {
    videos: exampleVideoData,
    currentVideo: exampleVideoData[0]
  },
  methods: {
    handleClick: function(video){
      this.currentVideo = video;
    }
  }
});
  