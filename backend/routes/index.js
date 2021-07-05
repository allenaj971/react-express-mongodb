var express = require('express');
var router = express.Router();
const db = require('../connection.js');
const postModel = require("../models/postModel.js");

/* GET home page. */
// our post request to send a new article
router.post('/', async (req, res) => {
  // deconstruct title and content from request body
  const { author, title, content } = req.body;

  // it will try to create a newPost object from our schema model 
  // then it will send it as a response to us
  try {
    const newPost = await postModel.create({ author, title, content });
    res.json(newPost);
  } catch (error) {
    res.status(500).send(error);
  }

});

// get all posts
router.get('/', async (req, res) => {
  // it will try to find our posts
  // then it will send it as a response to us
  try {
    const post = await postModel.find();
    res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// filter posts by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findById(id);
    res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// used to update the post based on id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { author, title, content } = req.body;

  try {
    const post = await postModel.findByIdAndUpdate(id, { author, title, content });
    res.json(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete post
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findByIdAndDelete(id);
    res.json("Deleted sucessfully!");
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
