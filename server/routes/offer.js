const router = require('express').Router(); 
const Offer = require('../models/Offer');

router.post("/create", (req, res, next) => { 
    var newOffer = new Offer(
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
    ).save().then((newOffer) => {
        console.log("new offer created: " + newOffer);
    })
});


router.post("/findNearest", (req, res, next) => { 
    var coord = req.body.coordinates;
    Offer.aggregate(
        [
            { "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": coord
                },
                "distanceField": "distance",
                "spherical": true,
                "maxDistance": 10000
            }}
        ],
        function(err,results) {
            res.send()
        }
    )
});

router.post("/delete", (req, res, next) => { 
    Offer.findOneAndDelete({id: req.body.id}  , (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    })
});

module.exports = router;