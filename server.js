let express = require('express');
let session = require('express-session');
let passport = require('passport');
let bodyParsser = require('body-parser');
let GithubStrategy = require('passport-github2');
let secret = require('./.config');

const app = express();

app.use(bodyParsser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secret.secret
}));
app.use(passport,initialize());
app.use(passport.session());

app.use(express.static('./public'));

passport.use(new GithubStrategy({
    domain: "",
    clientID: "",
    clientSecret: "",
    callbackURL: ''
    },
    function (accessToken, refreshToken, extraParams, profile, done) {

    }
));

