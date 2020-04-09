const router = require('express').Router(); 
const Need = require('../models/Need');
const Location = require('../models/Location');


router.post("/", (req, res, next) => { 
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
        res.sendStatus(200);
    })
    Location.findOne({location: req.body.coordinates }).then((newloc) => {
        if (newloc) {
        }
        else{
            newLocation = new Location({
                location: { 
                    "type": "Point",
                    "coordinates": req.body.coordinates
                },
            }).save().then((newLocation) => {
                console.log("location created: " + newLocation);
            })  
        }
    })
});

router.get("/getAll", (req, res, next) => { 
    console.log("request");
    Need.find({}, function(err, docs) {
        if (!err) { 
            res.send(docs);
            console.log(docs);
        }
        else {
            throw err;
        }
    })
});



module.exports = router;