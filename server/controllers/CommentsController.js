const Comment = require('../models/Comments');


// @desc POST Single Comment for a Pharmacy :
// @route POST http://localhost:5000/api/comment/:id
// @access Public

const createComment = async (req, res) => {
    const CommentData = await Comment.create({
        comment: req.body.comment,
        id_Pharmacy: req.params.id
    });
    if(CommentData){
        res.status(200)
        .json({message: "Comment Created Succefully !"})
    } else {
        res.status(400)
        .json({message: "An Error Occured please try again :("})
    }
}

// @desc DELETE Single Comment for a Pharmacy :
// @route POST http://localhost:5000/api/comment/:id
// @access PRIVATE

const deleteComment = async (req, res) => {
}

module.exports = {createComment , deleteComment}