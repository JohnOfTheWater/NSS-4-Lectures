// th5ddis is a single line comment
// bla bla

/* this
 * is
 * awesome
 */


console.log("Giovanni's hello");

//debugger


var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a)

var power = Math.pow(2, 8)

console.log('e is ' + e);
console.log('2 to be a power is ' + power)

//example;
//you have a room that is 8ft by 12ft
//write the code that will compute the area of
//the room and print that out to the console

var area = 8 * 12

console.log('The area of a room that is 8ft by 12ft is ' + area);

//example
//you have a cylinder that is 5 and 9 inches.
//what is the volume in cu.in.

var pi = Math.PI
var volume = pi * 25 * 9

console.log('The volume is ' + volume);

//you are a floor painter
//you have an exeptionally large bucket of paint
//you can paint up to 29,572 square feet of surface without havin to refill.
//every house you encounter has 3 rooms. here are the dimension.
//3 x 5
//7 x 9
//6 x 2
//how many houses can you paint before running out of paint?

var room1 = 3 * 5;
var room2 = 7 * 9;
var room3 = 6 * 2;
var home =  room1 + room2 + room3;
var paint = 29572;
var homesToPaint = paint / home;
homesToPaint = Math.floor(homesToPaint);
console.log(homesToPaint);

//you are a spaceman, with lasers
//you can travel the speed of light
//you are in the andromeda galaxy, somewhere
//you want to destroy justin bieber
//if you leave tomorrow
//when you leave tomorrow
//when will you arrive to meet the bieb.
//how many days to get here
//please hurry!!!

var andromeda = 2538000;
var distance = andromeda * 365;
console.log('I will kill the bieb in ' + distance + ' days');

var firstName = prompt('Enter your first name');
console.log('Your first name is ' + firstName );

var lastName = prompt('Enter your las name');
console.log('Your full name is ' + firstName + ' ' + lastName );



/*
var l = prompt('Enter the lenght of your room');
l = parseInt(l);

var h = prompt('Enter the height of your room');
h = parseInt(l);

var w = prompt('Enter the width of your room');
w = parseInt(l);


console.log('The volume of your room is ')
*/

var age = prompt('What is your age');
age = parseInt(age);
if (age < 18)
  console.log('you cannot vote');
else
  console.log('you can vote')
