// 11.1 AN ARRAY
var food = ['donuts', 'coffee', 'ice cream', 'pizza']

food[0]     // returns 'donuts'
food[1]     // returns 'coffee'
food[2]     // returns 'ice cream'
food[3]     // returns 'pizza'

// you can change the array and say something like:
food[2] = 'popcorn';    // returns 'popcorn' instead of 'ice cream' this also changes the array.

food.length     // returns 4, because there are 4 elements in the array.

// How would you get the last element in the array?
console.log(food.length[1]);    // this is my original answer, but this returns undefined.
console.log(food.length - 1);   // this is my second answer, but this does not return the value. only the index of the array.
console.log(food[food.length - 1]);     // this is the correct answer because it gives the actual last value of the array.

