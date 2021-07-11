let app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        ws: [],
        search: "",
        info:''
    },
    created: function () {
      
        ws = new WebSocket("wss:" + window.location.host);
    },
    methods: {
        send_data: function () {
             ws.send(this.search);
            this.info=" Sending ...";
            this.search='';
        },
    },
});
