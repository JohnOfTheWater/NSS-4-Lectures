'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Stuff'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var result = (req.query.x)*1+(req.query.y)*1;
  res.send({answer:result});
};

exports.multy = function(req, res){
  var result = req.query.x;
  result = result.split(',');
  console.log(result);
  var mul = _.reduce(result, function(mul, num){return mul*num;}, 1);
  res.send({answer:mul});
};
