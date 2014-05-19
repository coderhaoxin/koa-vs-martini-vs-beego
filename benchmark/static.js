'use strict';

var request = require('supertest');

var times = 100,
  startTime = Date.now(),
  count = 0;

for (var x = 0; x < times; x++) {
  request('http://localhost:3000')
    .get('/index.html')
    .expect(200)
    .end(function(err, res) {
      if (err) {
        console.log(err);
      } else {
        count++;
        if (count === times) {
          console.log('due (ms): ', (Date.now() - startTime));
          // console.log(res.text);
        }
      }
    });
}