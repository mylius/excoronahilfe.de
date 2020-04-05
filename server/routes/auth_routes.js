const router = require('express').Router(); 
const passport = require("passport");

//auth with google
router.get("/google",passport.authenticate("google",{
    scope: ["profile",'https://www.googleapis.com/auth/userinfo.email']
}));

//callback route for google
router.get("/google/redirect",passport.authenticate("google"),(req,res) => {
    res.send(req.user);
})

//auth with twitter
router.get("/twitter",passport.authenticate("twitter",{
    scope: ["profile","email"]
}));

//callback route for twitter
router.get("/twitter/redirect",passport.authenticate("twitter"),(req,res) => {
    res.send(req.user);
})

//auth with facebook
router.get("/facebook",passport.authenticate("facebook",{
    scope: ['email']
}));

//callback route for google
router.get("/facebook/redirect",passport.authenticate("facebook"),(req,res) => {
    res.send(req.user);
})



module.exports = router;