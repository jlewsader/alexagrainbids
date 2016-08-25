'use strict';

var DataHelper = require('./datahelper.js');

var dataHelper = new DataHelper();
dataHelper.requestStatus().then(function(data){
  console.log(data.results[0].bids[0].price);
}
)
