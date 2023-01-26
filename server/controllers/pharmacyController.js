const Pharmacy = require("../models/Pharmacy")
const ErrorResponse = require("../utils/errorResponse")
const { validationResult } = require("express-validator/check")

/**
    @desc POST Single Pharmacy :
    @route POST http://localhost:5000/api/pharmacy
    @access Private[Admin]
*/
const createPharmacy = (req, res, next) => {
    const errors = validationResult(req)

    try {
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() })

        const { name, address, phoneNumber, startTime, endTime } = req.body

        const pharmacy = new Pharmacy({
            name,
            address,
            phoneNumber,
            startTime,
            endTime,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
        })

        pharmacy.save()

        res.status(200).json({ message: "Pharmacy Created Succefully !" })
    } catch (error) {
        console.log(error)
        next(new ErrorResponse(error, 400))
    }
}

const updatePharmacy = (req, res) => {
    res.send("working!")
}

const getPharmacies = (req, res) => {
    res.send("working!")
}

const getPharmacy = (req, res) => {
    res.send("working!")
}

const deletePharmacy = (req, res) => {
    res.send("working!")
}


const searchPharmacy = async(req , res , next) =>{
    // await res.send("search done")
    // console.log(req.params.key);
    try {
        const data = await Pharmacy.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]
        }
    )

    if(data.length == 0){
        return res.status(404)
        .send(`no record matche's ${req.params.key}`)
    }

        res
        .status(200)
        .send(data)

    } catch (error) {
        res
        .status(400)
        .send(error)
    }

}

module.exports = {
    createPharmacy,
    updatePharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy,
    searchPharmacy,
}

