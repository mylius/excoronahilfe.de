const router = require('express').Router(); 
const Offer = require('../models/Offer');
const Location = require('../models/Location');

router.post("/", (req, res, next) => { 
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
<<<<<<< HEAD
        ],(err,data)=>{
            if(err) {
              next(err);
              return;
            }
            res.send(data);
          })    
=======
        ],
        function(err,results) {
            res.send()
        }
    )
>>>>>>> dbb094a9107b5ceffbe69fbf6f80304067374d5c
});

router.post("/delete", (req, res, next) => { 
    Offer.findOneAndDelete({id: req.body.id}  , (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    })
});

<<<<<<< HEAD
router.get("/getAll", (req, res, next) => { 
    console.log("request");
    Offer.find({}, function(err, docs) {
        if (!err) { 
            res.send(docs);
            console.log(docs);
        }
        else {
            throw err;
        }
    })
});

=======
>>>>>>> dbb094a9107b5ceffbe69fbf6f80304067374d5c
module.exports = router;