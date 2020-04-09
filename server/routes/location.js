const router = require('express').Router(); 
const Location = require('../models/Location');

router.get("/getAll", (req, res, next) => { 
    console.log("request");
    Location.find({}, function(err, docs) {
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