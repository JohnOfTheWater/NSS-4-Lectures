/* jshint unused:false */

var Shelter = (function(){

  'use strict';

  function Shelter(name){
    debugger;
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = 0;
    this.animals = [];
  }

  Shelter.prototype.setHours = function(times){
    var hours = _.map(times, function(time){
      return time.day + ' ' + time.open + '-' + time.close;
    });

    this.hours = hours.join(', ');
  };

  Shelter.prototype.addAnimal = function(animal){
    this.animals.push(animal);
  };

  Shelter.prototype.placeAnimal = function(name){
    debugger;
    var animals =  _.remove(this.animals, function(animal){
      debugger;
      return animal.name === name;
    });

    return animals[0];
  };

  return Shelter;
})();

