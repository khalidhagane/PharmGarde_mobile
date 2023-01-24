const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    review: {
        type: Number,
        required: [true, 'please fill this field']
    },
    id_Pharmacy: {
        type: mongoose.Types.ObjectId,
        ref: 'Pharmacie'   
    }
})

module.exports = mongoose.model('Review', ReviewSchema)
