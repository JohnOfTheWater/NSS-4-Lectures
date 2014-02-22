$(document).ready(initialize);
function initialize(){
  $('#box1').hide();
  $('#box2').hide();
  $('#pollo').hide();
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
  $('#product').click(product);
  $('#clear2').click(clear2);
  $('#calcimm').click(function(){
    $('#box1').animate({
      width: '+300px',
      backgroundColor: 'red'}, 2000,function(){
        //Animation complete.
      });
     $('#box1').show();
         $('#num1').focus();
            $('#pollo').show();
  });


      $( "#pollo" ).click(function() {
        $( "#box2" ).animate({
        height: "+200",
        }, 2000, function() {
              // Animation complete.
     });
     $('#box2').show();
         $('#numa').focus();
        });
}


function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#numa').val('');
  $('#numb').val('');
  $('#numc').val('');
  $('#numd').val('');
  $('#nume').val('');
  $('#op').val('');
  $('#result').text('');
  $('#result2').text('');
}

function reset(){
    $('#box1').animate({
      width: '+20px',
      backgroundColor: 'red'}, 2000,function(){
        //Animation complete.
      });
      $('#box1').hide()

}

function clear2(){
  $('#num1').val('');
  $('#num2').val('');
  $('#numa').val('');
  $('#numa').focus();
  $('#numb').val('');
  $('#numc').val('');
  $('#numd').val('');
  $('#nume').val('');
  $('#op').val('');
  $('#result').text('');
  $('#result2').text('');
}

function calculate(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val();

  var result = compute(num1,num2,op);
  $('#result').text(result);
}

/*function sum(){
  var numa = $('#numa').val();
  numa = parseFloat(numa);
  var numb = $('#numb').val();
  numb = parseFloat(numb);
  var numc = $('#numc').val();
  numc = parseFloat(numc);
  var numd = $('#numd').val();
  numd = parseFloat(numd);
  var nume = $('#nume').val();
  nume = parseFloat(nume);

  var result = computeSum(numa,numb,numc,numd,nume);
  $('#result2').text(result);
}
***/
function sum(){
  var s = 0;

  $('.numbers').each(function temp(index, element){
     s += parseFloat(element.value);
  });
    $('#result').text(s);
}
// I HAVE TO CHANGE THE CLASS OF NUMA
function product(){
  var numa = $('#numa').val();
  numa = parseFloat(numa);
  var numb = $('#numb').val();
  numb = parseFloat(numb);
  var numc = $('#numc').val();
  numc = parseFloat(numc);
  var numd = $('#numd').val();
  numd = parseFloat(numd);
  var nume = $('#nume').val();
  nume = parseFloat(nume);

  var result = computeProduct(numa,numb,numc,numd,nume);
  $('#result2').text(result);
}

function computeProduct(a,b,c,d,e){
  return result = a*b*c*d*e
}

function computeSum(a,b,c,d,e){
  return result = a+b+c+d+e
}

function compute(x,y,operator){
  var result;
  switch(operator){
    case'+':
      result = x + y;
        break;
    case'-':
      result = x-y;
        break;
    case'*':
      result = x*y;
        break;
    case'/':
      result = x/y;
        break;

  }
      return result;

}

