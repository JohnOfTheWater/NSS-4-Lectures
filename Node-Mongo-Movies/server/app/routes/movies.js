'use strict';

var Movie = require('../models/movie');
var Mongo = require('mongodb');

exports.update = function(req, res){
  console.log(req.body);
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  var movie = new Movie(req.body);
  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};

  movies.update(query, movie, function(err, count){
    res.send({updated:count, id:req.params.id, movie:movie});
  });
};

exports.create = function(req, res){
  console.log(req);
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find().toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.query = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find(req.query).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.deleteMovie = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = Mongo.ObjectID(req.params.id);
  var query = {_id : id};
  movies.remove(query, function(err, count){
    res.send({deleted:count, id:req.params.id});
  });
};

