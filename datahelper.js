'use strict';
var _ = require('lodash');
var rp = require('request-promise');
var ENDPOINT = 'http://ondemand.websol.barchart.com/getGrainBids.json?apikey=';
var API = '32a44e088d42b1b800d524716d631c54';
var OPT = '&zipCode=47932&maxDistance=50&getAllBids=0&bidsPerCom=2&totalLocations=5'

function DataHelper() {
}

DataHelper.prototype.requestStatus = function() {
  return this.getStatus().then(
    function(response) {
      console.log('success');
      return response.body;
    }
  );
};

DataHelper.prototype.getStatus = function() {
  var options = {
    method: 'GET',
    uri: ENDPOINT + API + OPT,
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};

// DataHelper.prototype.formatAirportStatus = function(airportStatus) {
//   var weather = _.template('The current weather conditions are ${weather}, ${temp} and wind ${wind}.')({
//     weather: airportStatus.weather.weather,
//     temp: airportStatus.weather.temp,
//     wind: airportStatus.weather.wind
//   });
//   if (airportStatus.delay === 'true') {
//     var template = _.template('There is currently a delay for ${airport}. ' +
//       'The average delay time is ${delay_time}. ' +
//       'Delay is because of the following: ${delay_reason}. ${weather}');
//     return template({
//       airport: airportStatus.name,
//       delay_time: airportStatus.status.avgDelay,
//       delay_reason: airportStatus.status.reason,
//       weather: weather
//     });
//   } else {
//     //no delay
//     return _.template('There is currently no delay at ${airport}. ${weather}')({
//       airport: airportStatus.name,
//       weather: weather
//     });
//   }
// };

module.exports = DataHelper;
