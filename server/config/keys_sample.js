
module.exports = {
    mongoURI: "mongodb://user:"+ encodeURIComponent('password') + "@server:port/DB",
    sendgrid: {
        sg_user: "",
        sg_key: "",
    },
    google: {
        ClientID: "",
        ClientSecret: ""
    },
    twitter: {
        consumerKey: "",
        consumerSecret: ""
    },
    facebook: {
        consumerKey: "",
        consumerSecret: ""
    },
    session: {
        cookieKey: ""
    }
};
