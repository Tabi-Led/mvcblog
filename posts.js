const express = require('express');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../middleware/authMiddleware');
const posts = require('../models/Post');

const router = express.Router();

// Get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// Create a new post
router.post('/', authMiddleware, (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: uuidv4(),
        title,
        content,
        username: req.user.username,
        date: new Date()
    };

    posts.push(newPost);
    res.json(newPost);
});

// Update a post
router.put('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const post = posts.find(post => post.id === id && post.username === req.user.username);
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    post.title = title;
    post.content = content;
    res.json(post);
});

// Delete a post
router.delete('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;

    const postIndex = posts.findIndex(post => post.id === id && post.username === req.user.username);
    if (postIndex === -1) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.json({ msg: 'Post removed' });
});

module.exports = router;
