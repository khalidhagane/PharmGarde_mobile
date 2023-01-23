const mongoose = require('mongoose')

const PharmacieSchema = new mongoose.Schema({

    name:{
        type: String,
        max: 100,
        min: 3,
        required:[true,'name required']
    },
    address:{
        type: String,
        required:[true,'address required']
    },
    phoneNumber:{
        type:String,
        required:[true,'phone Number required']
    },
    startTime:{
        type:Date,
        required:[true,'opening Time required']
    },
    endTime:{
        type:Date,
        required:[true,'closing Time required']
    }

})

module.exports = mongoose.model('Pharmacie', PharmacieSchema)

