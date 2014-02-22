(function(){

  'use strict';

  $(document).ready(initialize);

  var exercises = [];

  function initialize(){
    $(document).foundation();
    $('#create-exercise').click(createExercise);
    $('#query-exercise').click(queryExercise);
    getExercises();
  }

  function queryExercise(){
    var name = $('#names').val();
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises/';
    url += name;
    $.getJSON(url, displayExercises);
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var cals = $('#cals').val();
    var date = $('#date').val();
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    var options = {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:cals, date:date};
    options.success = exerciseCreated;
    $.ajax(options);
  }

  function exerciseCreated(exercise){
    displayExercise(exercise);
  }

  function getExercises(){
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    $.getJSON(url, displayExercises);
  }

  function displayExercises(data){
    $('#exercises > tbody').empty();
    for(var i = 0; i < data.exercises.length; i++){
      displayExercise(data.exercises[i]);
    }
  }

  function displayExercise(exercise){
    addExerciseToSelect(exercise);

    var $name = $('<td>');
    var $time = $('<td>');
    var $cals = $('<td>');
    var $date = $('<td>');

    $name.text(exercise.name);
    $time.text(exercise.time);
    $cals.text(exercise.calories);
    $date.text(exercise.date);

    var $row = $('<tr>');

    $row.append($name, $time, $cals, $date);
    $('#exercises > tbody').prepend($row);
  }

  function addExerciseToSelect(exercise){
    var isFound = _.any(exercises, function(e){return e.name === exercise.name;});
    if(!isFound){
      exercises.push(exercise);
      $('#names').append('<option value="'+exercise.name+'">'+exercise.name+'</option>');
    }
  }

})();
