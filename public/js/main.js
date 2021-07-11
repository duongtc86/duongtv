const app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    video_select: 0,
    videos:null,
  },
  created() {   
   this.getdata();
  
  },methods:{
    getdata(){
      var key="AIzaSyC8P0APHKhmH1_X1FPI6sDAGER_FNujjH4";
      var hai='phim';
      var url = 'https://www.googleapis.com/youtube/v3/search?key='+key+'&type=video&part=snippet&q='+hai+'&maxResults=50';
      var url='https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ZfcleJMYsh4&format=json'

    // var url ="  https://www.youtube.com/results?search_query=c%C3%A0+ph%C3%AA+ko+%C4%91%C6%B0%E1%BB%9Dng"
      axios.get(url)
        .then(function (res) {        
            // app.$set( app.videos= res.data.items);   
            // console.log(res.data)     
            console.log(res)        
        })
    },
  }
})