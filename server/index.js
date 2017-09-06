const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config()

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/*', function (req, res) {
  var options = {
    url: 'https://www.sfmoma.org' + req.url,
    headers: {
      'Authorization': process.env.API_KEYS
    }
  };

  request(options, function (error, response, body) {
    if (error) { throw error; }
    res.json(JSON.parse(body));
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
