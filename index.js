'use strict';

var DataHelper = require('./datahelper.js');

var dataHelper = new DataHelper();
dataHelper.requestStatus().then(function(dataJSON){
  console.log(dataHelper.formatData(dataJSON));
});
