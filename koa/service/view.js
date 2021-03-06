'use strict';

var view = require('co-views');
var render = view('view', {
  map: {
    html: 'swig'
  }
});

exports.index = function * () {
  var data = {
    title: 'node-app-lab',
    description: 'hello, hahaha',
    items: []
  };
  for (var i = 0; i < 100; i++) {
    data.items.push({
      id: i,
      name: 'tea',
      quantity: 100 + i,
      price: 1000 + i * 10,
      createTime: Date.now()
    });
  }
  this.body = yield render('item', data);
};