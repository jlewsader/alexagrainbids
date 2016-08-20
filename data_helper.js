var request = require('request');
var apiKey = '9SBxe_3T7k9sBno6VcE4'

// Corn Data Endpoint
var dataEndpoint = 'https://www.quandl.com/api/v3/datasets/COM/CORN_2.json?limit=1&column_index=1&api_key=' + apiKey

request(dataEndpoint, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var contents = body;
    var jsonData = JSON.parse(contents);
    console.log(jsonData.dataset.name); // Name from JSON dataset
    var obj = jsonData.dataset.data[0]; // Price object from JSON,
    var priceSet = JSON.stringify(obj); // then stringify,
    var price = priceSet.split(",");    // then split twice, 
    var price = price[1].split("]");    // to remove date and 
    console.log('$' + price[0]);        // only output the PRICE. (with $ added)
  };
})