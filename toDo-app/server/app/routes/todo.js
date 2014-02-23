/* global exports, global */
/*jshint camelcase: false */
'use strict';

var Todo;
var Mongo = require('mongodb');

exports.create = function(req, res){
  init();

  var todo = new Todo(req.body);
  todo.save(function(){
    res.send(todo);
  });
};

exports.query = function(req, res){
  debugger;
  var db = req.app.locals.db;
  var todos = db.collection('todos');
  todos.find(req.query).toArray(function(err, records){
    res.send({records:records});
  });
};

exports.skip = function(req, res){
  init();
  console.log(req.params.skip);
  var x = req.params.skip;

  Todo.skip(x, function(todos){
    res.send({todos:todos});
  });
};

exports.sortDate = function(req, res){
  init();
  Todo.findDate(function(todos){
    res.send({todos:todos});
  });
};

exports.indexAll = function(req, res){
  init();
  Todo.indexAll(function(todos){
    res.send({todos:todos});
  });
};

exports.findPriority = function(req, res){
  init();
  console.log(req.params.priority);
  var x = req.params.priority;

  Todo.findPriority(x, function(todos){
    res.send({todos:todos});
  });
};

exports.index = function(req, res){
  init();
  console.log(req.params.limit);
  var x = req.params.limit;

  Todo.findAll(x, function(todos){
    res.send({todos:todos});
  });
};

exports.show = function(req, res){
  init();

  Todo.findById(req.params.id, function(todo){
    res.send(todo);
  });
};

exports.update = function(req, res){
  init();

  var id = new Mongo.ObjectID(req.params.id);
  var name = req.body.name;
  var date = req.body.date;
  var isComplete = req.body.isComplete;
  var tags = req.body.tags;
  var priority_id = req.body.priority_id;
  var todo = new Todo({_id:id, name:name, date:date, isComplete:isComplete, tags:tags, priority_id:priority_id});
  todo.save(function(){
    res.send(todo);
  });
};

/*
exports.update = function(req, res){
  init();

  var todo = new Todo(req.body);
  todo.save(function(){
    res.send(todo);
  });
};
*/

exports.destroy = function(req, res){
  init();

  Todo.deleteById(req.params.id, function(count){
    res.send({count:count});
  });
};

function init(){
  Todo = global.nss.Todo;
}
