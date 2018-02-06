// let data = {videos: exampleVideoData, currentVideo: exampleVideoData[0]};
// let vm = new Vue({ data })
//properties manually added to the 'vm' after instantiation won't be reactive


let vm = new Vue('app', {
	el: '#app',
  template: `  <div>
			    <nav className="navbar">
			      <div className="col-md-6 offset-md-3">
			        <div><h5><em>search</em> view goes here</h5></div>
			      </div>
			    </nav>
			    <div className="row">
			      <div className="col-md-7">
			        <div><h5><em>videoPlayer</em> view goes here</h5></div>
			      </div>
			      <div className="col-md-5">
			        <div><h5><em>videoList</em> view goes here</h5></div>
			      </div>
			    </div>
			  </div>`
})  
  
