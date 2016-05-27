'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MainSchema = new mongoose.Schema({
  Name : String,
  Address: String,
  Email: String,
  PhoneNumber : String,
  Message : String

});

export default mongoose.model('Main', MainSchema);
