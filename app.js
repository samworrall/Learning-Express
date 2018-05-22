const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

var names = []
//Two arguments, the path, and a callback function which has two arguments, req and res
app.get('/', function(req, res) {
  res.render('index', {retrievedNames : names});
});

app.get('/new_name', function(req, res) {
  res.render('newName');
});

app.post('/new_name', function(req, res) {
  names.push(req.body.name);
  res.redirect('/')
});
