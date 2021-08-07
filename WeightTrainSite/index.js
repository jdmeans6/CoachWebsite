const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.send("Welcome!")
});

app.get("/home", (req, res) => {
    res.render("home.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});

app.get("/payment", (req, res) => {
    res.render("payment.ejs")
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});



app.get("*", (req, res) => {
    res.send("I'm sorry, this page does not exist.")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is up and running on ${PORT}`));