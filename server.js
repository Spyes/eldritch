const express = require('express');

const app = express();
app.set('port', 3000);
app.use(express.static(__dirname+'/public'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function (req, res) {
  res.render('index.html');
});

const server = app.listen(3000);
