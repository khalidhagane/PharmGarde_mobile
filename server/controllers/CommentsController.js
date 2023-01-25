const Comment = require("../models/Comments")
const { validationResult } = require("express-validator/check")
const ErrorResponse = require("../utils/errorResponse")

/** 
    @desc POST Single Comment for a Pharmacy :
    @route POST http://localhost:5000/api/comment/:id
    @access Public
*/

const createComment = async (req, res) => {
    const errors = validationResult(req)

    try {
        if (!errors.isEmpty())
            return next(new ErrorResponse(errors.array()[0].msg, 400))

        const CommentData = await Comment.create({
            comment: req.body.comment,
            id_Pharmacy: req.pharmacy._id,
        })
        if (!CommentData)
            return res.status(400).json({
                message: "An Error Occured please try again :(",
            })

        res.status(200).json({ message: "Comment Created Succefully !" })
    } catch (error) {
        res.status(400).json({ error })
    }
}

/** 
    @desc DELETE Single Comment for a Pharmacy :
    @route DELETE http://localhost:5000/api/comment/:id
    @access PRIVATE
*/

const deleteComment = async (req, res) => {
    try {
        const deleteComment = await Comment.deleteOne({
            _id: req.params.pharmacy_id,
        })
        if (deleteComment.deletedCount === 0)
            return res.status(400).json({ message: "Comment not found" })
        res.status(200).json({ message: "Comment Deleted Succefully !" })
    } catch (error) {
        res.status(400).json({ error })
    }
}

/**
    @desc GET ALL Comment for a Pharmacy BY ID :
    @route GET http://localhost:5000/api/comment/:id
    @access PRIVATE
*/

const getCommentPharmacy = async (req, res) => {
    try {
        const CommentsPharmacy = await Comment.find({
            id_Pharmacy: req.pharmacy._id,
        })

        if (!CommentsPharmacy)
            return res.status(400).json({ message: "No comments Founded !" })

        res.status(200).json(CommentsPharmacy)
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = { createComment, deleteComment, getCommentPharmacy }
