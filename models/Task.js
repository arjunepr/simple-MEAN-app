const mongoose = require('mongoose');
const schema = new mongoose.Schema({ 
  task: {
    type: String, 
    required: 'Please enter a valid string.'
  },

  isDone: {
    type: Boolean,
    required: 'Only true or false values are accepted.'
  }

});

module.exports = mongoose.model('Task', schema);
