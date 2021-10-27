// you can use a forEach method to iterate through an array
// this calls the provided function once for each element in the array
var coffee = ['americano', 'caffe latte', 'black coffee']
function theDrink(drink){
    document.write(`<div>${drink}</div>`)
}

coffee.forEach(theDrink);

// the argument that gets called in the forEach method is a function called theDrink
// theDrink is a function that has a placeholder(argument) 'drink' which will be replaced by each element inside the coffee array

// instead of creating a seperate function like what is above we can pass an anonymous function as the argument for the forEach method:
coffee.forEach(function(drink){
    document.write(`<div>${drink}</div>`)
})

// if you know that you're going to want to use this function again then you would want to use a named function like what you have on line 4. If you're only using it once than an anonymous function works better.