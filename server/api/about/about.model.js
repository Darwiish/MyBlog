'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AboutSchema = new mongoose.Schema({
  Name: String,
  image: String,
  text: String,
});

export default mongoose.model('About', AboutSchema);
