/* global Animal, animalFactory: false */
(function(){

  'use strict';

  $(document).ready(initialize);


  function initialize(){
    $('#add-photo').click(addPhoto);
    $('#add-animals').click(addAnimal);

    animals = animalFactory();
    showAnimals();
  }

  var photosArray = [];
  var animals = [];

  function showAnimals(){
    debugger;
    for(var i = 0; i < animals.length; i ++){
      var $tr = $('<tr>');
      var $td = $('<td>');
      $td.append($('<a href=https://www.google.com/search?q='+animals[i].name+' data-search=name data-value='+animals[i].name+'>').text(animals[i].name));
      $td.val(animals[i].name);
      $tr.append($td);

      $td = $('<td>');
      $td.append($('<a href=# data-search=species data-value='+animals[i].species+'>').text( animals[i].species));
      $tr.append($td);

      $td = $('<td>');
      $td.append($('<a href=# data-search=age data-value='+animals[i].age+'>').text( animals[i].age));
      $tr.append($td);

      $td = $('<td>');
      $td.append($('<a href=# data-search=gender data-value='+animals[i].gender+'>').text(animals[i].gender));
      $tr.append($td);

      $td = $('<td>');
      $td.text(animals[i].color);
      $tr.append($td);

      $td = $('<td>');
      $td.text(animals[i].description);
      $tr.append($td);

      $td = $('<td>');
      var img = animals[i].photos[0];
      $td.css('background-image', 'url('+img+')');
      $tr.append($td);

      $td = $('<td>');
      var img2 = animals[i].photos[1];
      $td.css('background-image', 'url('+img2+')');
      $tr.append($td);

      $('#animalTable').append($tr);
    }
  }

  /*function getAnimalPhotos(){
    var imgArray = $('#imgs > .imgDiv');
    return _.map(imgArray, function(img){
      return $(img).css('background-image');
    });
  }*/// Ho usato push nella function addAnimal cosi questa non mi serve


  function addAnimal(event){
    var species = $('#species').val();
    var color = $('#color').val();
    var age = $('#age').val() * 1;
    var gender = $('#gender').val();
    var name = $('#name').val();
    var description = $('#desc').val();
    var photos = photosArray;

    var animal = new Animal(name, age, gender, photos, description, color, species);
    animals.push(animal);

    event.preventDefault();
  }

  function addPhoto(){
    var url = $('#photo').val();
    var $Img = $('<div>');
    $Img.addClass('newAnimal').css('background', 'url('+url+')').css('background-size','cover');
    $('#img').append($Img);
    photosArray.push(url);
    event.preventDefault();
  }


})();
