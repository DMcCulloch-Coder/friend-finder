const path = require('path')
const express = require('express');
const router = express.Router();
const friends = require('../api/friends')

router.get('/api', (req, res) => {
    res.json(friends)
})

router.post('/api', (req, res) => {
    const user = req.body

    //evaluates friendships and sends back the closest match

    friends.push(user)

})

module.exports = router;