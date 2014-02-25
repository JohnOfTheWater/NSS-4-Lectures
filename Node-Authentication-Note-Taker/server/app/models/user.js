'use strict';

module.exports = User;
var bcrypt = require('bcrypt');
var users = global.nss.db.collection('users');

function User(user){
  //this._id = user._id;
  this.email = user.email;
  this.password = user.password;
}

User.prototype.hash = function(fn){
  var self = this;

  bcrypt.hash(this.password, 8, function(err, hash){
    self.password = hash;
    fn();
  });
};

User.prototype.insert = function(fn){
  var self = this;

  users.findOne({email:this.email}, function(err, user){
    if(!user){
      users.insert(self, function(err, records){
        fn(records[0]);
      });
    }else{
      fn(null);
    }
  });
};
/*
User.findByEmail = function(email, fn){
  users.findOne({email:email}, function(err, record){
    fn(record ? new User(record) : null);
  });
};
*/
