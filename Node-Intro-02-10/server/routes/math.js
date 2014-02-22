'use strict';

var _ = require('lodash');

exports.product = function(req, res){
  var numbers = req.query.numbers.split(', ');
  var prod = _.reduce(numbers, function(acc, num){return acc*num;}, 1);
  res.jsonp({product:prod});
};

exports.crazy = function(req, res){
  var array = req.query.array.split(' ');
  var newArray = _.remove(array, function(x){return x % 2 === 0;});
  console.log(newArray);
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i].length;
  }
  var craz = (sum %2 === 0)? sum*sum*sum : sum*sum;
  res.jsonp({crazy:craz});
};
