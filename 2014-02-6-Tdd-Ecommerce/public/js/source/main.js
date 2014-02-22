(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
  }

  var timer;

  function stop(){
    clearInterval(timer);
  }
  function reset(){
    $('#container').empty();
    $('body').css('background-color', 'white');
    
  }

  function start(){
    clearInterval(timer);
    timer = setInterval(makeColorBox, 100);
  }

  function makeColorBox(){
    var $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', randomColor());
    $('body').css('background-color', randomColor());
    $('#container').prepend($div);
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var alpha = Math.random();

    var color = 'rgba('+red+','+blue+','+green+','+alpha+')';
    
    return color;
  }


})();

