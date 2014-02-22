$(document).ready(initialize);

function powerOn(){
    $('#answer').delay(0).show(0);
    $('#queue').delay(0).show(0);
    $('#queue').text('');
  $('#answer').animate({
    height: '55px'
    },1000);
  $('#queue').delay(1000).animate({
    width: '84px'
    },1000);
  $('#switchOn').fadeOut(2000);
  $('#switchOff').fadeIn(2000);
    $('#answer').delay(3000).text('0');

}

function powerOff(){
    $('#answer').text('');
    $('#queue').text('');
  $('#answer').animate({
    height: '0px'
    },1000);
  $('#queue').delay(1000).animate({
    width: '0px'
    },1000);
  $('#switchOff').fadeOut(2000);
  $('#switchOn').fadeIn(2000);
    $('#answer').delay(0).hide(0);
    $('#queue').delay(0).hide(0);
}

function initialize(){
  $('#switchOff').hide();
  $('#switchOn').click(powerOn);
  $('#switchOff').click(powerOff);
  $('.number').click(displayNumber);
  $('#clearButton').click(clear);
  $('#reverse').click(flip);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);
}

function compute(){
  var operator = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  var result;

  switch(operator){
    case 'add':
      result = numbers[0] + numbers[1];
    break;
    case 'sub':
      result = numbers[1] - numbers[0];
    break;
    case 'mul':
      result = numbers[0] * numbers[1];
    break;
    case 'div':
      result = numbers[1] / numbers[0];
    break;
    case 'sum':
      var result = 0;

      for(var i =0; i<numbers.length; i++)
        result += numbers[i];

        $('#answer').text(result);
        $('#queue').empty();
    break;
    case 'power':
      result = Math.pow(numbers[0], numbers[1]);
    break;
  }

      $('#answer').text(result);
      $('#queue').empty();

}
/*
function displayNumber(){
  debugger
  var display = $('#answer').text();
  $('#answer').text(this.textContent);
  var y = this.textContent;
  var result = display + y;
    $('#answer').text(result);
}
*/

function pushToQueue(){
  var display = $('#answer').text();
  $('#answer').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').prepend($li);
}

function displayNumber(){
  var display = $('#answer').text();
  var current = this.textContent;
  var output;

  if (current === '.' && containsChar(display,'.')) return;

  if (display === '0' && current !== '.')
    output = current;
  else
    output = display + current;

  $('#answer').text(output);
}

function clear(){
    $('#answer').text('0');
    $('#queue').text('');
}

function flip(){
  var x = $('#answer').text();
    x *= -1
  $('#answer').text(x);
}

