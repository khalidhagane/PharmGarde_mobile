const { body , param } = require("express-validator/check")

const validate = (method) => {
    switch (method) {
        case "createReview": {
            return [
                body("review")
                    .exists()
                    .isNumeric()
                    .withMessage("Review must be a number"),
            ]
        }
        case "createComment": {
            return [
                body("comment")
                    .exists()
                    .withMessage("Comment must be a string"),
            ]
        }
        case "pharmacy": {
            return [
                body("name").exists().withMessage("Name is required"),
                body("address").exists().withMessage("Address is required"),
                body("phoneNumber")
                    .exists()
                    .withMessage("Phone Number is required"),
                body("startTime")
                    .exists()
                    .withMessage("Start Time is required"),
                body("endTime").exists().withMessage("End Time is required"),
            ]
        }
        // case "search":{
        //     return [
        //         param('key').exists().withMessage("Search keyword is required")
        //     ]
        // }
    }
}

module.exports = { validate }
