const YouTube = require("youtube-sr").default;
const http = require('http');
const express = require('express');
const youtubedl = require('youtube-dl');
var cors = require('cors');

const app = express();
const server = http.createServer(app);
app.use(cors());

app.get('/', function (req, res) {
    YouTube.trending()
        .then(
            data => {
                var items = [];
                data.forEach(el => {
                    var item = {
                        id: el.id,
                        title: el.title,
                        thumbnail: el.thumbnail.url,
                        live: el.live,
                        private: el.private

                    }
                    items.push(item);
                });
                res.send(items);
                res.end();
            }
        )
        .catch(console.error);
});
app.get('/search/:s', function (req, res) {

    var s = req.params.s;
    console.log(s);
    YouTube.search(s, { limit: 25 })
        .then(
            data => {
                var items = [];
                data.forEach(el => {
                    var item = {
                        id: el.id,
                        title: el.title,
                        thumbnail: el.thumbnail.url,
                        live: el.live,
                        private: el.private

                    }
                    items.push(item);
                });
                res.send(items);
                res.end();
            }
        )
        .catch(console.error);
});
app.get('/video/:id', function (req, res) {
    var id = req.params.id;
    var url = 'http://www.youtube.com/watch?v=' + id;

    youtubedl.getInfo(url, function (err, info) {
        try {

            if (info.id !== undefined) {
                var item = {
                    id: info.id,
                    url: info.url
                };
                res.send(item);
            }
            res.end();
        } catch (err) {
            console.log(err);
            res.send("error");
            res.end();

        }
    })


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("start server");
});
