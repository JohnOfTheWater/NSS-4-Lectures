function add(x,y){
  return x+y;
}

function sum(numbers){
  var total = 0;
    for (var i = 0; i < numbers.length; i++)
      total = total +  numbers[i];

    return total;
}



function countEvens (numbers){
  var counter = 0;
    for (var i = 0; i < numbers.length; i++)
      if(numbers[i]%2===0)
        counter = counter + 1;
    return counter;
}

function makeEvenStringsUppercase (strings){
  for(var i = 0; i<strings.length; i++)
    if(strings[i].length % 2 === 0)
      strings[i] = strings[i].toUpperCase();

  return strings;
}

function sumLengthOfStrings(sentence){
  var strings = sentence.split(' ');
    var counter = 0;
    for(var i = 0; i < strings.length; i++)
      counter = counter + strings[i].length;

    return counter
}

function makeCatWithName(name){
  return {name:name};
}

