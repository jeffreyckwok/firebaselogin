var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlaceSchema = new mongoose.Schema( {
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  savedId: {type: String, required: true},
}, {timestamps: true})

mongoose.model('Place', PlaceSchema);
