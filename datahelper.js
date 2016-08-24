'use strict';

var request = require('request');
var API = '32a44e088d42b1b800d524716d631c54';
var ENDPOINT = 'http://ondemand.websol.barchart.com/getGrainBids.json?apikey=' + API + '&zipCode=47932&maxDistance=50&getAllBids=0&bidsPerCom=2&totalLocations=5';

request(ENDPOINT, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var contents = JSON.parse(body);
    console.log(contents.results[0].company);
    console.log(contents.results[0].bids[0].symbol);
    console.log(contents.results[0].bids[0].price);
    console.log(contents.results[0].bids[1].symbol);
    console.log(contents.results[0].bids[1].price);

  };
})
