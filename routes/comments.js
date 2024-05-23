const express = require('express');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../middleware/authMiddleware');
const comments = require('../models/Comment');
const posts = require('models\post.js');

const router = express.Router();

// Get comments for a post
router.get('/:postId', (req, res) => {
    const { postId } = req.params;
    const postComments = comments.filter(comment => comment.postId === postId);
    res.json(postComments);
});

// Add a comment to a post
router.post('/:postId', authMiddleware, (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;

    const post = posts.find(post => post.id === postId);
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    const newComment = {
        id: uuidv4(),
        postId,
        content,
        username: req.user.username,
        date: new Date()
    };

    comments.push(newComment);
    res.json(newComment);
});

module.exports = router;
