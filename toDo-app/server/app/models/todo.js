/*jshint camelcase: false */
'use strict';

module.exports = Todo;
var todos = global.nss.db.collection('todos');
var Mongo = require('mongodb');

function Todo(todo){
  this._id = todo._id;
  this.name = todo.name;
  this.dueDate = todo.dueDate;
  this.isComplete = false;
  this.tags = todo.tags ? pippo(todo.tags) : [];
  this.priority_id = todo.priority_id;
}

function pippo(x){
  x = x.toString();
  x = x.split(',');
  return x;
}

Todo.prototype.save = function(fn){
    todos.save(this, function(err, record){
      fn(record);
    });
  };


Todo.findById = function(id, fn){
  var _id = Mongo.ObjectID(id);
  todos.findOne({_id:_id}, function(err, record){
    fn(record ? record : null);
  });
};

Todo.findByName = function(name, fn){
  todos.findOne({name:name}, function(err, record){
    fn(record ? new Todo(record) : null);
  });
};

Todo.findAll = function(fn){
  todos.find().toArray(function(err, records){
    fn(records);
  });
};

Todo.deleteById = function(id, fn){
  var _id = Mongo.ObjectID(id);
  todos.remove({_id:_id}, function(err, count){
    fn(count);
  });
};

Todo.findByName = function(name, fn){
  todos.findOne({name:name}, function(err, record){
    fn(record ? new Todo(record) : null);
  });
};

Todo.findByComplete = function(val, fn){
  todos.find({isComplete:val}).toArray(function(err, records){
    fn(records);
  });
};

Todo.findByPriority = function(val, fn){
  todos.find({priority_id:val}).toArray(function(err, records){
    fn(records);
  });
};

Todo.findByTag = function(tag, fn){
  todos.find({tags:{$in: [tag] }}).toArray(function(err, records){
    fn(records);
  });
};
