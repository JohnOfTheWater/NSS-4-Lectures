'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'my name is node'});
};

exports.color = function(req, res){
  res.jsonp({color:'green'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum: total});
};

exports.canDrink = function(req, res){
  var result ='';
  var name = req.params.a;
  var x = req.params.b;

  if (x <= 17){
    result = ''+name+' can not drink';
  }

  if (x >= 18 && x< 21){
    result = 'maybe '+name+' can drink';
  }

  if (x >= 21){
    result = ''+name+' can drink';
  }
  res.jsonp({canDrink: result});
};
