const Pharmacy = require("../models/Pharmacy")
const ErrorResponse = require("../utils/errorResponse")
const { validationResult } = require("express-validator/check")
const { log } = require("console")

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

const getPharmacies = (req, res) => {
    res.send("working!")
}

const getPharmacy = (req, res) => {
    res.send("working!")
}

const deletePharmacy = (req, res) => {
    res.send("working!")
}

module.exports = {
    createPharmacy,
    updatePharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy,
}
