const path = require('path')
const express = require('express');
const router = express.Router();
const friends = require('../api/friends')

router.get('/api', (req, res) => {
    res.json(friends)
})

router.post('/api', (req, res) => {
    const user = req.body
    let replyIndex = 0;
    let lowestDifference = 60;

    for (let i = 0; i < friends.length; i++) {
        let tempDiffenece = 0;
        
        for (let j = 0; j < 10; j++) {
            tempDiffenece += Math.abs(user.scores[j] - friends[i].scores[j])
        }

        if (tempDiffenece < lowestDifference) {
            lowestDifference = tempDiffenece;
            replyIndex = i;
        }

    }

    friends.push(user)
    res.send(friends[replyIndex])

})

module.exports = router;