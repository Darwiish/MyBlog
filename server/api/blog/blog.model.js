'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));




var BlogSchema = new mongoose.Schema({
    Title: String,
    date: { type: Date },
    text: String,
    image:String,
    category:{
      type: mongoose.Schema.ObjectId,
      ref: 'category'
    }

});

export default mongoose.model('Blog', BlogSchema);
