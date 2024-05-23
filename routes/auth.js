const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const users = require('models\user.js');

const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
        id: uuidv4(),
        username,
        password: hashedPassword
    };

    users.push(newUser);
    const payload = {
        user: {
            id: newUser.id,
            username: newUser.username
        }
    };

    jwt.sign(payload, 'secretkey', { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
    });
});

// Log in
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
        user: {
            id: user.id,
            username: user.username
        }
    };

    jwt.sign(payload, 'secretkey', { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
    });
});

module.exports = router;
