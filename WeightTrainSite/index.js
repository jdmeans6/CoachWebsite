const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./model/user");

// logger
const logger = require("morgan");
app.use(logger("dev"));

// build connection
const dbConfig = require("./config/config");
// pull sensitive info from seperate file
let { authInfo, url, db } = dbConfig.conn;
// builds connection route
let connection = `${url}/${db}`

mongoose
    .connect(connection, authInfo)
    .then(() => console.log(`Connected to ${db} db.`))
    .catch((err) => `Error connecting to ${db} db.`)

app.use(express.urlencoded({ extended: true}));
app.use(require("express-session")({
    secret: "Yes",
    resave: false,
    saveUninitialized: false
}));

    // PASSPORT CONNECTIONS
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/home", (req, res) => {
    res.render("home.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});

app.get('/signup', (req, res)=> {
    res.render('signup.ejs')
})
app.post('/signup', (req, res) => {
    var newUser = new User({username: req.body.email});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err);
            return res.render('signup.ejs')
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('account.ejs');
            })
        }
    })
})

// app.get("/payment", (req, res) => {
//     res.render("payment.ejs")
// });

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});

app.get('/routines', (req, res) => {
    res.render('routines.ejs')
});

app.get("*", (req, res) => {
    res.send("I'm sorry, this page does not exist.")
});

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is up and running on ${PORT}`));