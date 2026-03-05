const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin';

    if (password === adminPassword) {
        // Simple success response. In production, return a JWT token.
        return res.json({ success: true, token: 'fake-jwt-token-for-demo' });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid password' });
    }
});

module.exports = router;
