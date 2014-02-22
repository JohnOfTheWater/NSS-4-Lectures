$(document).ready(initialize);

function initialize(){
  $('#color-text').focus();
  $('.color').mouseenter(focus);
  $('.color').mouseleave(unFocus);
  $('#add-color').click(addColor);
  $('#add-pixels').click(addPixels);
  $('#NormalPixels').click(normalPixels);
  $('#add-BigPixels').click(addBigPixels);
  $('#add-BiggerPixels').click(addBiggerPixels);
  $('#resetPixels').click(reset);
  $('#eraser').click(erase);
  $('#colors').on('click', '.color', clickSelectColor);
  $('#pixels').on('mouseover', '.pixel, .BigPixel, .BiggerPixel', hoverColorPixel);
}


function focus(){
  $(this).css('border-radius', '50px');
}

function unFocus(){
  $(this).css('border-radius', '0px');
}

function normalPixels(){

  for(var i = 0; i<15000; i++){
    var $pixel = $('<div>');
    $pixel.addClass('pixel');
    $('#pixels').prepend($pixel);

  }
}

function erase(){
  $('.pixel').css('background-color', 'white');
  $('.BigPixel').css('background-color', 'white');
  $('.BiggerPixel').css('background-color', 'white');
}

function reset(){
  $('.pixel').hide();
  $('.BigPixel').hide();
  $('.BiggerPixel').hide();
}

function hoverColorPixel(){
  var color = $('.selected').css('background-color');
  $(this).css('background-color', color);
}

function addPixels(){
  var num = $('#number-text').val();
  num = parseInt(num);

  for(var i = 0; i<num; i++){
    var $pixel = $('<div>');
    $pixel.addClass('pixel');
    $('#pixels').prepend($pixel);

  }
}
function addBigPixels(){

  for(var i = 0; i<7500; i++){
    var $pixel = $('<div>');
    $pixel.addClass('BigPixel');
    $('#pixels').prepend($pixel);

  }
}
function addBiggerPixels(){

  for(var i = 0; i<3770; i++){
    var $pixel = $('<div>');
    $pixel.addClass('BiggerPixel');
    $('#pixels').prepend($pixel);

  }
}
function clickSelectColor(){
  if($(this).hasClass('selected')){
      $(this).removeClass('selected');
  } else {
       $('.color').removeClass('selected');
           $(this).addClass('selected');
  }
}

/*
function addcolor(){
  var display = $('#color-text').val();
  $newColor = $('<div>');
  $newColor.addClass('color');
  $newColor.css('background-color', display);
  $('#colors').append($newColor);
}
*/
function addColor(){
  var color = $('#color-text').val();
  $('#color-text').val('');
  $('#color-text').focus();

  var $box = $('<li>');
  $box.addClass('color');
  $box.css('background-color', color);

  $('#colors').append($box);
}


