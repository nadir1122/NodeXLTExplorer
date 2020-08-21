var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var BlockSchema = new Schema({
  blockhash: { type: String, lowercase: true, unique: true, index: true},
  blockheight: { type: Number, default: 0, index: true },
  timestamp: { type: Number, default: 0, index: true },
}, {id: false});

BlockSchema.index({total: 1, total: -1, blockindex: 1, blockindex: -1});

module.exports = mongoose.model('block', BlockSchema);
