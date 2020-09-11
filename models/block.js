var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var BlockSchema = new Schema({
  coin: { type: String },
  blockhash: { type: String, lowercase: true, unique: true,index:true},
  blockheight: { type: Number, default: 0, unique: true },
  timestamp: { type: Date, default: 0 },

}, {id: false});


module.exports = mongoose.model('block', BlockSchema);
