// 25.2 connecting to mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 25.3
// a schema is the blueprint for the structure of the data that will be saved in the database
const pizzaSchema = new mongoose.Schema({
    name: String,
    price: Number
});
// next you create a model, which is used to make a document
    // first paramater is the singular name of your collection
        // mongoose will create a plural, lowecase version of it: in this case "Pizza" will become the "pizzas" collection inside the database
    // the second paramater is the schema
const Pizza = mongoose.model('Pizza', pizzaSchema);

// next you create a document by creating a new model from above and passing an object into it that follows the schema from above
const thePizza = new Pizza ({
    name: 'Pepperoni',
    price: 10
});
// then, to save this document the following runs
    // it can be run without the callback function, but it is nice to have to see if its been done successfully
thePizza.save(function(error, result) {
    if(error){
        console.log(error)  // function will log an error in console if it does not save correctly
    } else {
        console.log(result) // function logs the result if it is successful
    }
})