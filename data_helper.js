var request = require('request');
var apiKey = '9SBxe_3T7k9sBno6VcE4'
var dataEndpoint = 'https://www.quandl.com/api/v3/datasets/COM/CORN_2.json?limit=1&column_index=1&api_key=' + apiKey

request(dataEndpoint, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var contents = body;
    var jsonData = JSON.parse(contents);
    console.log(jsonData.dataset.name);
    // console.log(jsonData.dataset.data[0]);
    var obj = jsonData.dataset.data[0];
    var priceSet = JSON.stringify(obj);
    var price = priceSet.split(",");
    var price = price[1].split("]");
    console.log(price[0]);
  };
})