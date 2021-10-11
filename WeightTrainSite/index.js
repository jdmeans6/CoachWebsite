const express = require("express");
const app = express();

// logger
const logger = require("morgan");
app.use(logger("dev"));


// app.get("/", (req, res) => {
//     res.send("Welcome!")
// });

app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});

app.get('/signup', (req, res)=> {
    res.render('signup.ejs')
})

app.get("/payment", (req, res) => {
    res.render("payment.ejs")
});

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