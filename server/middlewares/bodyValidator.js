const { body } = require("express-validator/check")

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
    }
}

module.exports = { validate }
