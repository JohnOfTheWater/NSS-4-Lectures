'use strict';

exports.index = function(req, res){
  var m = 'mamma!';
  res.send({ciao:m});
};

