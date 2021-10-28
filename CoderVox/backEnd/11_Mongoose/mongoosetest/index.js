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
        // in this case "Pizza" will become the pizza collection inside the database
    // the second paramater is the schema
const Pizza = mongoose.model('Pizza', pizzaSchema);