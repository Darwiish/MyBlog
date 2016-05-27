'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));


var CategorySchema = new mongoose.Schema({

     Name: String,
});





export default mongoose.model('Category', CategorySchema);
