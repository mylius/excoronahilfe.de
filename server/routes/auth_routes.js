const router = require('express').Router(); 
const passport = require("passport");

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

//auth with google
router.get("/google",passport.authenticate("google",{
    scope: ["profile",'https://www.googleapis.com/auth/userinfo.email']
}));

//callback route for google
router.get("/google/redirect",passport.authenticate("google"),(req,res) => {
    res.send(req.user.id);
});

//auth with twitter
router.get("/twitter",passport.authenticate("twitter",{
}));

//callback route for twitter
router.get("/twitter/redirect",passport.authenticate("twitter"),(req,res) => {
    res.send(req.user.id);
});

//auth with facebook
router.get("/facebook",passport.authenticate("facebook",{
    scope: ['email']
}));

//callback route for google
router.get("/facebook/redirect",passport.authenticate("facebook"),(req,res) => {
    res.send(req.user.id);
});

//auth with local
router.post("/local", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(400).send([user, "Cannot log in", info]);
        }   
        console.log(user)
        req.login(user, err => {

            res.send(user);
        });
    })(req, res, next);
  });

//callback route for google
router.get("/local/redirect",passport.authenticate("local"),(req,res) => {
    res.send(req.user.id);
});



module.exports = router;