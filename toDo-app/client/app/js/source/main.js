/*jshint camelcase: false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#controls').hide();
    $('#priority').hide();
    $('#save').click(savePriority);
    $('#saveTodo').click(addTodo);
    $('#priority').on('click', '.delete', deletePriority);
    $('#todoList').on('click', '.x', deleteTodo);
    $('#priority').on('click', '.name', hideName);
    $('#priority').on('click', '.edit', editPriority);
    getPriorities();
    getTodos();
  }

  var todosArray = [];

  //-------delete Todo----------//

  function deleteTodo(){
    var id = $(this).data('id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todos/' + id;
    var type = 'DELETE';
    actualId = id;
    var success = removeTodo;

    $.ajax({url:url, type:type, success:success});

  }

  function removeTodo(data){
    if(data.count === 1){
      $('.todoName[data-id="'+actualId+'"]').remove();
      $('.Complete[data-id="'+actualId+'"]').remove();
      $('.notComplete[data-id="'+actualId+'"]').remove();
      $('.dueDate[data-id="'+actualId+'"]').remove();
      $('.Priority[data-id="'+actualId+'"]').remove();
      $('.tags[data-id="'+actualId+'"]').remove();
      actualId = '';
    }
  }

//-------Add Todo------------------------------//

  function addTodo(){
    debugger;
    var name = $('#nameTodo').val();
    var dueDate = $('#dateDue').val();
    var tags = $('#tagsName').val();
    var priority_id = $('#PriorityName').val();
    var z = {name:name, dueDate:dueDate, priority_id:priority_id, tags:tags};
    var data = z;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todos';
    var type = 'POST';
    var success = newTodo;

    $.ajax({url:url, type:type, data:data, success:success});

  }

  function newTodo(todo){
    $('#nameTodo').val('').focus();
    $('#dateDue').val('MM/DD/YYY');
    $('#tagsName').val('fun, house, work');
    displayTodo(todo);
  }



//-------Get Todos------------------------------//

  function getTodos(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todos';
    $.getJSON(url, displayTodos);
  }

  function displayTodos(data){

    for(var i = 0; i < data.todos.length; i++){
      displayTodo(data.todos[i]);
    }
  }

  function displayTodo(todo){
    todosArray.push(todo);
    debugger;
    var $complete = $('<div>');
    var $notComplete = $('<div>');
    var $todoName = $('<div>');
    var $dueDate = $('<div>');
    var $Priority = $('<div>');
    var $tags = $('<div>');
    var $delete = $('<div>');


    $complete.text('Complete').attr('data-id', todo._id).addClass('Complete');
    $notComplete.text('Not Complete').attr('data-id', todo._id).addClass('notComplete');
    $todoName.text(todo.name).attr('data-id', todo._id).addClass('todoName');
    $dueDate.text(todo.dueDate).attr('data-id', todo._id).addClass('dueDate');
    $Priority.text(todo.priority_id).addClass('Priority').attr('data-id', todo._id);
    $tags.text(todo.tags).addClass('tags').attr('data-id', todo._id);
    $delete.text('x').addClass('x').attr('data-id', todo._id);

    if(todo.isComplete === false){
      $('#isComplete').append($notComplete);
    }else{
      $('#isComplete').append($complete);
    }
    $('#todoName').append($todoName);
    $('#dueDate').append($dueDate);
    $('#Priority').append($Priority);
    $('#tags').append($tags);
    $($notComplete).append($delete);
  }



//-------Priorities Managment--------------------------//

  var prioritiesArray = [];
  var actualId = '';

//-------delete priority----------//

  function editPriority(){
    var id = $(this).data('id');
    var name = $('.rename[data-id="'+id+'"]').val();
    var value = $('.value[data-id="'+id+'"]').text();
    var k = {name:name, value:value};
    var data = k;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/priorities/' +id;
    var type = 'PUT';
    var success = function(){
      $('.name').remove();
      $('.value').remove();
      $('.delete').remove();
      $('.quantita').remove();
      $('.edit').remove();
      $('.rename').remove();
      getPriorities();
    };
    $.ajax({url:url, type:type, data:data, success:success});

  }

//-------delete priority----------//

  function deletePriority(){
    var id = $(this).data('id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/priorities/' + id;
    var type = 'DELETE';
    actualId = id;
    var success = removePriority;

    $.ajax({url:url, type:type, success:success});

  }

  function removePriority(data){
    if(data.count === 1){
      $('.name[data-id="'+actualId+'"]').remove();
      $('.value[data-id="'+actualId+'"]').remove();
      $('.delete[data-id="'+actualId+'"]').remove();
      $('.edit[data-id="'+actualId+'"]').remove();
      actualId = '';
    }
  }


//-------save priority----------//

  function savePriority(){
    var name = $('#name').val();
    var value = $('#value').val();
    var z = {name:name, value:value};
    var data = z;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/priorities';
    var type = 'POST';
    var success = newPriority;

    $.ajax({url:url, type:type, data:data, success:success});

  }

  function newPriority(priority){
    $('#name').val('');
    $('#value').val('');
    $('#name').focus();
    displayPriority(priority);
  }

//-------get priority----------//

  function getPriorities(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/priorities';
    $.getJSON(url, displayPriorities);
  }

  function displayPriorities(data){

    for(var i = 0; i < data.priorities.length; i++){
      displayPriority(data.priorities[i]);
    }
  }

  function displayPriority(priority){
    prioritiesArray.push(priority);
    var $name = $('<div>');
    var $value = $('<div>');
    var $del = $('<div>');
    var $edit = $('<div>');
    var $rename = $('<input>');

    $rename.val(priority.name).attr('data-id', priority._id).addClass('rename').css('visibility', 'hidden');
    $name.text(priority.name).attr('data-id', priority._id).addClass('name');
    $value.text(priority.value).attr('data-id', priority._id).addClass('value');
    $del.text('x').addClass('delete').attr('data-id', priority._id);
    $edit.text('edit').addClass('edit').attr('data-id', priority._id).css('visibility', 'hidden');

    $value.prepend($rename);
    $('#tname').append($name);
    $('#tvalue').append($value);
    $('#delete').append($del);
    $('#edit').append($edit);
  }

  function hideName(){
    var id = $(this).data('id');
    $('.edit').css('visibility', 'hidden');
    $('.name').css('visibility', '');
    $('.rename').css('visibility', 'hidden');
    $('.name[data-id="'+id+'"]').css('visibility', 'hidden');
    $('.rename[data-id="'+id+'"]').css('visibility', '');
    $('.rename[data-id="'+id+'"]').focus();
    $('.edit[data-id="'+id+'"]').css('visibility', '');
  }

})();

