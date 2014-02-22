/* jshint unused:false */
/* global Shelter: false */

var Client = (function(){

  'use strict';

  function Client(name){
    this.name = name;
    this.animals = [];
  }

  Client.prototype.adoptAnimal = function(name){
    debugger;
    for(var i = 0; i < Shelter.this.placedAnimals.length; i++){
      if(Shelter.this.placedAnimals[i].name === name){
        this.animals.push(Shelter.this.placedAnimals[i]);
      }
    }
  };

  return Client;

})();
