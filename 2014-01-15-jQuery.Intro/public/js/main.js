$(document).ready(initialize);

function initialize(){
  //$ means jQuery
  //$('css or jquery selector')
  $('h1').css('color', 'blue');
  $('h1').css('font-size','30px');
  $('h1').text('Welcome to javascript');

  $('div').css('color','blue');
  $('#d2').css('font-size','9px');
  $('#d3').css('background-color','yellow');
  $('.c1').css('font-family','monospace');
  
  $('.c1').css('font-size','40px').text('Giovanni');
  $('h1').css({'color': 'red',
                'background': 'green',
                'font-family': 'sans-serif'}).text('Welcome Everyone!');

  var bgcolor = prompt('What background color do you want?');
      $('#d3').css('background-color', bgcolor);

  var numPs = $('.cp').length
}

