const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'active'],
    default: 'active'
  }
}, {
  timestamps: true
});

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;
