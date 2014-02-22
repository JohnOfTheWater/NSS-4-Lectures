/* exported Cart */

var Cart = (function(){
  'use strict';

  function Cart(){
    this.products = [];
  }

  Object.defineProperty(Cart.prototype, 'total',{
    get: function(){
      var total = 0;
      var prices = _.map(this.products, 'price');
      prices.forEach(function(product){
        total += product;
      });
      return total;
    }
  });

  Cart.prototype.addProduct = function(product, quantity){
    var numOfProd = quantity || 1;
    for(var i = 0; i< numOfProd; i++){
      this.products.push(product);
    }
  };

  //--removes all the element in the array--//
/*                  |
                    v
  Cart.prototype.removeProduct = function(thing){
    debugger;
    var output = _.remove(this.products, function(product){
      return product === thing;
    });
    console.log(output);
  };
*/
  Cart.prototype.removeProduct = function(thing, quantity){
    debugger;
    var num = quantity || 1;
    var self = this;
    for (var i = 0; i < num; i++){
      var x = _.indexOf(self.products, thing);
      self.products.splice(x, 1);
    }
    console.log(self.products);
  };

  return Cart;
})();

