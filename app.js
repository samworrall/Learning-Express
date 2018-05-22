//Require express and make it an object
const express = require('express');
//Represent our app as an express object
const app = express();
//Tell the app to listen to a port
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

//Two arguments, the path, and a callback function which has two arguments, req and res
app.get('/', function(req, res) {
  res.send('Hello World!');
});
