const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment : {
          type: String,
          required: [true, 'please fill this field']
    },
    id_Pharmacy: {
          type: mongoose.Types.ObjectId,
          ref: 'Pharmacie'
    }
})

module.exports = mongoose.model('Comment', CommentSchema)