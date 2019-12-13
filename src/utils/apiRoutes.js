const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, "./friends.js"))
})

module.exports = router;