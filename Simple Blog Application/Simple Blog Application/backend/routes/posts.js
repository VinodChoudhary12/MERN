const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create", async (req, res) => {
    let newPost = ""
    try {
        console.log(req.body);
        newPost = await Post.create(
            req.body
        )
        if (!newPost) {
            res.status(500).json({ message: "Post Not Found", newPost })
        }
        res.status(200).json({ message: "PostFound", newPost, id: newPost._id })

    }
    catch (err) {
        res.status(500).json(err)
    }



})


//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPost)

    }
    catch (err) {
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({ postId: req.params.id })
        res.status(200).json("Post has been deleted!")

    }
    catch (err) {
        res.status(500).json(err)
    }
})


//GET POST DETAILS
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET POSTS
router.get("/", async (req, res) => {
    const query = req.query

    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        }
        const posts = await Post.find(query.search ? searchFilter : null)
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER POSTS
router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId })
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router