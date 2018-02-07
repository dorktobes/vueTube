// let data = {videos: exampleVideoData, currentVideo: exampleVideoData[0]};
// let vm = new Vue({ data })
//properties manually added to the 'vm' after instantiation won't be reactive


Vue.component('app', {
  template: `  <div>
			    <nav className="navbar">
			      <div className="col-md-6 offset-md-3">
			        <search></search>
			      </div>
			    </nav>
			    <div className="row">
			      <div className="col-md-7">
			        <video-player></video-player>
			      </div>
			      <div className="col-md-5">
			        <video-list></video-list>
			      </div>
			    </div>
			  </div>`
});

new Vue({
	el: '#app'
});
  
