const Pharmacy = require('../models/Pharmacy');
const createPharmacy = (req, res) => {
    res.send('working!')
}

const updatePharmacy = (req, res) => {
    res.send('working!')
}

const getPharmacies = (req, res) => {
    res.send('working!')
}

const getPharmacy = (req, res) => {
    res.send('working!')
}

const deletePharmacy = (req, res) => {
    res.send('working!')
}

// const getAllPharmacy = async (req, res, next) => {
//     // const id = req.params.id;
//     const AllPharmacy = await Pharmacy.find()
//     console.log('AllPharmacy',AllPharmacy)
//     if(AllPharmacy){
//         res.status(200)
//         .json(AllPharmacy)
//     } else {
//         res.status(400)
//         .json({message: "No pharmacy "})
//     }
// }

const searchPharmacy = async(req , res) =>{
    // await res.send("search done")
    // console.log(req.params.key);
    const data = await Pharmacy.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]

        }
    )
    res.send(data)
    // console.log('AllPharmacy',AllPharmacy)
    // await res.send

}

module.exports = {
    createPharmacy,
    updatePharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy,
    searchPharmacy,
    // getAllPharmacy
}