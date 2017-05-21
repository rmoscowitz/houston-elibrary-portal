var express = require('express')
var app = express()
import { search, libraries } from './pg_service';


app.get('/libraries', function(req, res) {
  libraries().then(libs => res.send(libs))
});

app.get('/search', function(req, res) {
  var params = {
    search: req.query.search || '',
    libraries: (req.query.libraries || '').split(","),
    limit: req.query.limit || 20,
    offset: req.query.offset || 0
  }
  search(params).then(data => {
    res.send(data)
  });
});

app.get('*', function(req, res) {
  res.send(express.static('../react/houston-elibrary/build'));
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
 })
