const router = require('express').Router(); 
const Need = require('../models/Need');


router.post("/create", (req, res, next) => { 
    var newNeed = new Need(
        {
            title: req.body.title,
            description: req.body.description,
            zip: req.body.zip,
            location: { 
                "type": "Point",
                "coordinates": req.body.coordinates
            },
            userID: "1",
            interests: req.body.interests
        }
    ).save().then((newNeed) => {
        console.log("new need created: " + newNeed);
    })
});


module.exports = router;