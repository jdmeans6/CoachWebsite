// 11.4 INDEX OF METHOD
// this will return the index of a certain element in the array. if no element is found it will return -1
var food = ['pizza', 'burger', 'fries', 'pizza']
var theBurger = food.indexOf('burger')
console.log(theBurger)  // this will return 1

// you can pass in a second argument which tells the array when to begin the search
var thePizza = food.indexOf('pizza', 2) 
console.log(thePizza)   // this will return 3