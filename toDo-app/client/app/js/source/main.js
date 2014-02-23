/*jshint camelcase: false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#panelLabelOut').hide();
    $('#seeFive').hide();
    $('#seeFive').click(getTodos);
    $('#panelLabel').click(showPanel);
    $('#panelLabelOut').click(hidePanel);
    $('#save').click(savePriority);
    $('#saveTodo').click(addTodo);
    $('#page2').click(nextPage);
    $('#page1').click(getTodos);
    $('#sortDue').click(sortDueDate);
    $('#sortComp').click(getTodos);
    $('#sortPrior').hide();
    $('#sortPrior').click(getTodos);
    $('#seeAll').click(seeAll);
    $('#priority').on('click', '.delete', deletePriority);
    $('#todoList').on('click', '.x1', deleteTodo);
    //$('#todoList').on('click', '.tags', filterTags);
    $('#todoList').on('click', '.notComplete', showDelete);
    $('#todoList').on('click', '.Complete', hideDelete);
    $('#todoList').on('click', '.Priority', filterPriority);
    $('#priority').on('click', '.name', hideName);
    $('#priority').on('click', '.edit', editPriority);
    getPriorities();
    getTodos();
  }

  var todosArray = [];

  //-------Control Panel Animation-----------------//

  function showPanel(){
    $('#panelLabel').hide();
    $('#panelLabelOut').show();
    $('#todoList').animate({margin:'+450 +0 +0 +200'});
    $('#controlPanel').delay(500).animate({margin:'+0 +0 +0 +0'});
    $('#nameTodo').focus();
  }

  function hidePanel(){
    $('#panelLabel').show();
    $('#panelLabelOut').hide();
    $('#controlPanel').animate({margin:'+0 +0 +0 -529'});
    $('#todoList').delay(500).animate({margin:'+150 +0 +0 +200'});
  }



  //-------Filter Todo----------//

  function filterPriority(){
    debugger;
    //var id = $(this).data('id');
    var priority = this.textContent;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todosp/' + priority;
    console.log(priority);
    $.getJSON(url, displayTodos);
  }

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
      $('.x1[data-id="'+actualId+'"]').remove();
      actualId = '';
    }
  }

  function showDelete(){
    var id = $(this).data('id');
    $('.notComplete[data-id="'+id+'"]').hide();
    $('.Complete[data-id="'+id+'"]').show();
    $('.x1[data-id="'+id+'"]').css('visibility', '');
    $('.todoName[data-id="'+id+'"]').css('text-decoration', 'line-through');
    $('.dueDate[data-id="'+id+'"]').css('text-decoration', 'line-through');
    $('.Priority[data-id="'+id+'"]').css('text-decoration', 'line-through');
    $('.tags[data-id="'+id+'"]').css('text-decoration', 'line-through');
  }

  function hideDelete(){
    var id = $(this).data('id');
    $('.notComplete[data-id="'+id+'"]').show();
    $('.Complete[data-id="'+id+'"]').hide();
    $('.x1[data-id="'+id+'"]').css('visibility', 'hidden');
    $('.todoName[data-id="'+id+'"]').css('text-decoration', '');
    $('.dueDate[data-id="'+id+'"]').css('text-decoration', '');
    $('.Priority[data-id="'+id+'"]').css('text-decoration', '');
    $('.tags[data-id="'+id+'"]').css('text-decoration', '');
  }

//-------Add Todo------------------------------//

  function addTodo(){
    var name = $('#nameTodo').val();
    var dueDate = $('#dateDue').val();
    var tags = $('#tagsName').val();
    var priority_id = $('#priorityName').val();
    var z = {name:name, dueDate:dueDate, priority_id:priority_id, tags:tags};
    var data = z;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todos';
    var type = 'POST';
    var success = newTodo;

    $.ajax({url:url, type:type, data:data, success:success});

  }

  function newTodo(){
    $('#nameTodo').val('').focus();
    $('#dateDue').val('MM/DD/YYY');
    $('#tagsName').val('');
    //displayTodo(todo);
    getTodos();
  }



//-------Get Todos------------------------------//

  function getTodos(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todos/'+5;
    $.getJSON(url, displayTodos);
    $('#seeFive').hide();
    $('#page1').show();
    $('#page2').show();
    $('#seeAll').show();
    $('#sortDue').show();
    $('#sortPrior').hide();
  }

  function nextPage(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todospage/'+5;
    $.getJSON(url, displayTodos);
  }

  function seeAll(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todosall';
    //$('#page1').animate({top:'+350'});
    $('#page1').hide();
    $('#page2').hide();
    $('#seeAll').hide();
    $('#seeFive').show();
    $.getJSON(url, displayTodos);
  }

  function displayTodos(data){
    //debugger;
    $('.todoName').remove();
    $('.Complete').remove();
    $('.notComplete').remove();
    $('.dueDate').remove();
    $('.Priority').remove();
    $('.tags').remove();
    $('.x1').remove();

    for(var i = 0; i < data.todos.length; i++){
      displayTodo(data.todos[i]);
    }
  }

  function displayTodo(todo){
    todosArray.push(todo);
    var $complete = $('<div>');
    var $notComplete = $('<div>');
    var $todoName = $('<div>');
    var $dueDate = $('<div>');
    var $Priority = $('<div>');
    var $tags = $('<div>');
    var $del = $('<div>');


    $complete.text('').attr('data-id', todo._id).addClass('Complete').hide();
    $notComplete.text('').attr('data-id', todo._id).addClass('notComplete').show();
    $todoName.text(todo.name).attr('data-id', todo._id).addClass('todoName');
    $dueDate.text(todo.dueDate).attr('data-id', todo._id).addClass('dueDate');
    $Priority.text(todo.priority_id).addClass('Priority').attr('data-id', todo._id);
    $tags.text(todo.tags).addClass('tags').attr('data-id', todo._id);
    $del.text('x').addClass('x1').attr('data-id', todo._id).css('visibility', 'hidden');
/*
    if(todo.isComplete === false){
      $('#isComplete').append($notComplete);
    }else{
      $('#isComplete').append($complete);
    }
*/
    $('#isComplete').append($complete);
    $('#isComplete').append($notComplete);
    $('#todoName').append($todoName);
    $('#dueDate').append($dueDate);
    $('#Priority').append($Priority);
    $('#tags').append($tags);
    $('#del').append($del);
  }

  function sortDueDate(){
    debugger;
    $('#page1').show();
    $('#page2').show();
    $('#seeAll').show();
    $('#seeFive').hide();
    $('#sortDue').hide();
    $('#sortPrior').show();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/todosdate';
    $.getJSON(url, displayTodos);
  }



//-------Priorities Managment--------------------------//

  var prioritiesArray = [];
  var actualId = '';

//-------Edit priority----------//

  function editPriority(){
    debugger;
    var id = $(this).data('id');
    var name = $('.rename[data-id="'+id+'"]').val();
    var value = $('.value[data-id="'+id+'"]').text();
    var k = {name:name, value:value};
    var data = k;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/priorities/' + id;
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
    var $option = $('<option>');

    $rename.val(priority.name).attr('data-id', priority._id).addClass('rename').css('visibility', 'hidden');
    $name.text(priority.name).attr('data-id', priority._id).addClass('name');
    $value.text(priority.value).attr('data-id', priority._id).addClass('value');
    $del.text('x').addClass('delete').attr('data-id', priority._id);
    $edit.text('edit').addClass('edit').attr('data-id', priority._id).css('visibility', 'hidden');
    $option.text(priority.name).val(priority.name).attr('data-id', priority.value).addClass('option');

    $value.prepend($rename);
    $('#tname').append($name);
    $('#tvalue').append($value);
    $('#delete').append($del);
    $('#edit').append($edit);
    $('#priorityName').append($option);
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

