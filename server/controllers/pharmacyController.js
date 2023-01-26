const Pharmacy = require("../models/Pharmacy")
const Comment = require("../models/Comments")
const Review = require("../models/Review")
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

/**
    @desc PUT Single Pharmacy :
    @route PUT http://localhost:5000/api/pharmacy/:pharmacy_id
    @access Private[Admin]
*/
const updatePharmacy = async (req, res) => {
    const errors = validationResult(req)

    try {
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() })

        const { name, address, phoneNumber, startTime, endTime } = req.body

        const pharmacy = await Pharmacy.updateOne(
            { _id: req.pharmacy.pharmacy_id },
            {
                $set: {
                    name,
                    address,
                    phoneNumber,
                    startTime,
                    endTime,
                    image: {
                        data: req.file.buffer,
                        contentType: req.file.mimetype,
                    },
                },
            },
            { new: true, runValidators: true }
        )

        res.status(200).json({ message: "Pharmacy Updated Succefully !" })
    } catch (error) {
        console.log(error)
        next(new ErrorResponse(error, 400))
    }
}

/**
    @desc GET ALL Pharmacies :
    @route GET http://localhost:5000/api/pharmacy
    @access Public
*/
const getPharmacies = async (req, res) => {
    try {
        const pharmacies = await Pharmacy.find()
        res.status(200).json({ pharmacies })
    } catch (error) {
        console.log(error)
        next(new ErrorResponse(error, 400))
    }
}

/**
    @desc GET Single Pharmacy BY ID :
    @route GET http://localhost:5000/api/pharmacy/:pharmacy_id
    @access Public
*/

const getPharmacy = async (req, res) => {
    try {
        const pharmacy = await req.pharmacy
        res.status(200).json({ pharmacy })
    } catch (error) {
        console.log(error)
        next(new ErrorResponse(error, 400))
    }
}

/**
    @desc DELETE Single Pharmacy BY ID :
    @route DELETE http://localhost:5000/api/pharmacy/:pharmacy_id
    @access Private[Admin]
*/
const deletePharmacy = async (req, res) => {
    try {
        const deletePharmacy = await Pharmacy.deleteOne({
            _id: req.pharmacy._id,
        })

        if (deletePharmacy.deletedCount === 0)
            return res
                .status(400)
                .json({ message: "Pharmacy can'not be deleted !" })

        await Comment.deleteMany({ id_Pharmacy: req.pharmacy._id })

        await Review.deleteMany({ id_Pharmacy: req.pharmacy._id })

        res.status(200).json({ message: "Pharmacy Deleted Succefully !" })
    } catch (error) {
        console.log(error)
        next(new ErrorResponse(error, 400))
    }
}


const searchPharmacy = async(req , res , next) =>{
    const errors = validationResult(req)
    // await res.send("search done")
    // console.log(req.params.key);
    if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() })
    try {
        const data = await Pharmacy.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]
        }
    )

    if(data.length == 0)
        return res.status(404)
        .send(`no record matche's ${req.params.key}`)
    

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

