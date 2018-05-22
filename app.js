//Require express and make it an object
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
//Represent our app as an express object
const app = express();
//Tell the app to listen to a port
const upload = multer();

app.set('view engine', 'pug');
app.use(upload.array());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

//Two arguments, the path, and a callback function which has two arguments, req and res
app.get('/', function(req, res) {
  res.render('index', {retrievedNames : app.get('data')});
});

app.get('/new_name', function(req, res) {
  res.render('newName');
});

app.post('/new_name', function(req, res) {
  app.set('data', req.body.name);
  res.redirect('/')
});
