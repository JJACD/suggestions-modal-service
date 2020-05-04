var config = require('./config.js')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});



const suggestionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productname: String,
  productprice: Number,
  productimgurl: String,
  productid: String,
  producturl: String,
  producttype: {
    collection: String, //ABC, commision, metal vent tech, city swat, surge
    category: String, // clothes, accessories
    gender: String, //women, mens, girls
    subcategory: String //joggers, shorts, bags, yoga mats, underswear, swimsuit, swim trunks
  },
  activitytype: String, //training, yoga, running, on the move, gym, tennis, golf, thermal
  bestseller: Boolean //yes or no
});



// const feedbackSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   rec_rating: Number,
//   exp_rating: Number,
//   comment: String,
//   followup: {
//     request: Boolean,
//     name: String,
//     email: String
//   },
//   screencapture: String,
// });


module.exports = mongoose.model('Suggestionsdata', suggestionsSchema);
// module.exports = mongoose.model('Feedbackdata', feedbackSchema);
