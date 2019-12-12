const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
})

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/survey.html"))
})

module.exports = router;