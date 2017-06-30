var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReviewSchema = new Schema( {
  content: {type: String, required: true},
  rating: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

mongoose.model('Review', ReviewSchema);
