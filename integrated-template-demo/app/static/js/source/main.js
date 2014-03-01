(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#sum').click(add);
    $('#multy').click(multy);
  }

  function add(){
    var x = $('#num1').val();
    var y = $('#num2').val();
    var url = '/calc/add?x='+x+'&y='+y;
    $.getJSON(url, displaySum);
  }

  function displaySum(data){
    debugger;
    $('#result').text(data.answer);
  }

  function multy(){
    debugger;
    var x = $('#multiply').val();
    var url = '/calc/multy?x='+x;
    $.getJSON(url, displayMulty);
  }

  function displayMulty(data){
    debugger;
    $('#result2').text(data.answer);
  }

})();

