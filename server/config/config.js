const mongoose = require('mongoose')

const dbConnect = async () => {

    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log('Connected succefully to pharmgarde')
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbConnect