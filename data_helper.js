var request = require('request');
var apiKey = '9SBxe_3T7k9sBno6VcE4'
var dataEndpoint = 'https://www.quandl.com/api/v3/datasets/COM/CORN_2.json?limit=1&column_index=1&api_key=' + apiKey

request(dataEndpoint, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  };
})