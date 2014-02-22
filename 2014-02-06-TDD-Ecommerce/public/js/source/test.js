/* global test,ok,deepEqual,Product,Person,Cart:false */

'use strict';

test('Product#new', function(){
  var p1 = new Product('banana', 2);

  ok(p1 instanceof Product, 'p1 is a product');
  deepEqual(p1.name, 'banana', 'p1 is a banana');
  deepEqual(p1.price, 2, 'the price of the banana is 2');
});

test('Person#new', function(){
  var p1 = new Person('pippo', 200);

  ok(p1 instanceof Person, 'p1 is a person(a goofy one)');
  deepEqual(p1.name, 'pippo', 'the name of the person should be pippo');
  deepEqual(p1.cash, 200, 'pippo is not broke');
});

test('Cart#new', function(){
  var c1 = new Cart();

  ok(c1 instanceof Cart, 'c1 is a cart');
  deepEqual(c1.products.length, 0, 'the products in the cart should be 0');
});

test('Cart#addProduct', function(){
  var p1 = new Product('banana', 2);
  var p2 = new Product('katana', 100);
  var r1 = new Person('goofy', 20);

  r1.cart.addProduct(p1, 3);
  r1.cart.addProduct(p2);

  deepEqual(r1.cart.products.length, 4, 'the products in the cart should be 4');
});

test('Cart#removeProduct', function(){
  var p1 = new Product('banana', 2);
  var p2 = new Product('katana', 100);
  var r1 = new Person('goofy', 120);
  debugger;
  r1.cart.addProduct(p1, 3);
  r1.cart.addProduct(p2, 2);
  r1.cart.removeProduct(p2, 2);

  deepEqual(r1.cart.products.length, 3, 'the products in the cart should be 4');
});

test('cart#total', function(){
  var r1 = new Person('Bob', 500);

  var p1 = new Product('cd', 12);
  var p2 = new Product('book', 5);
  var p3 = new Product('coffee', 25);

  r1.cart.addProduct(p1);
  r1.cart.addProduct(p2);
  r1.cart.addProduct(p3, 2);


  deepEqual(r1.cart.total, 67 , 'the cart should have a total of 67');
});
