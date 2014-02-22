/* exported Client */
/* global Stock:false */

var Client = (function(){

  'use strict';

  function Client(name, cash){
    this.name = name;
    this.cash = cash;
    this._portfolios = [];
  }

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.purchaseStock = function(symbol, amount, fn){
    var self = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

    $.getJSON(url, function(quote){
      var stock;
      var total = quote.LastPrice * amount;

      if(self.cash - total >= 0){
        stock = new Stock(symbol, amount, quote.LastPrice);
        self.cash -= total;
      }

      fn(stock);
    });
  };

  Client.prototype.sellStock = function(stock, amount, fn){
    var self = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + stock.symbol + '&callback=?';

    $.getJSON(url, function(quote){
      if(amount <= stock.shares){
        var total = quote.LastPrice * amount;
        self.cash += total;
        stock.shares -= amount;
      }

      fn(stock);
    });
  };

  Client.prototype.addPortfolio = function(input){
    this._portfolios = this._portfolios.concat(input);
  };

  Client.prototype.getPortfolio = function(input){
    var names = [].concat(input);

    var output = _.filter(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  Client.prototype.delPortfolio = function(input){
    var names = [].concat(input);

    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  return Client;
})();

