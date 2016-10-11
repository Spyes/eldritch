const express = require('express');
const request = require('request');

const url = 'http://127.0.0.1:5984/';
const db = 'eldritch';

const app = express();
app.set('port', 3000);
app.disable('etag');
app.use(express.static(__dirname+'/public'));

app.get('/investigators', function (req, res) {
  request.put(url + db + '/_find', function (err, resp, body) {
    console.log(body);
  });
});

app.get('*', function (req, res) {
  res.render('index.html');
});

const server = app.listen(3000);
