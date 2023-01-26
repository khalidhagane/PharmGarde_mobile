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