(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#tree').click(sum);
    $('#drink').click(canDrink);
    $('#product-button').click(product);
    $('#start').click(crazy);
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/color?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function sum(){
    var a = $('#num1').val();
    var b = $('#num2').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/sum/'+a+'/'+b+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#result').text(data.sum);
    });
  }

  function canDrink(){
    var a = $('#name').val();
    var b = $('#age').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/canDrink/'+a+'/'+b+'?callback=?';
    $.getJSON(url, function(data){
      $('#answer').text(data.canDrink);
    });
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product?numbers='+numbers+'&callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#product-response').text(data.prod);
    });
  }

  function crazy(){
    var array = $('#names').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/crazy?names='+array+'&callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#product-response').text(data.crazy);
    });
  }

})();

