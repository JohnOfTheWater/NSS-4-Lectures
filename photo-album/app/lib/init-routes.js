'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var albums = require('../routes/albums');

  app.get('/', d, albums.index);
  app.get('/albums/new', d, albums.new);
  app.get('/albums/:id', d, albums.show);
  app.post('/albums', d, albums.create);
  app.get('/albumsList', d, albums.list);
  app.post('/albums/:id', d, albums.photoAdd);
  app.del('/albums/:id', d, albums.destroy);
  console.log('Routes Loaded');
  fn();
}

