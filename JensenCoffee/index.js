const express = require('express');
const app = express();
// 
const logger = require('morgan');
app.use(logger('dev'));

// root route
app.get('/', (req, res) => {
    res.send('Coffee Time!')
});

app.get('/home', (req, res) => {
    res.render('home.ejs')
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running on port ${PORT}`));