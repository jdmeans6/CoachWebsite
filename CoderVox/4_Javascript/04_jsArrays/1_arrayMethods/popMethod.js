// 11.3 POP METHOD
// removes the last element in an array and returns the item that was popped, this also DOES alter the array
var breakfast = ['muffin', 'oatmeal', 'hash browns']
var leftovers = breakfast.pop();    // this will take the last element from the breakfast array and insert that element into the variable of leftovers
console.log(leftovers)  // this returns hashbrowns
console.log(breakfast)  // this returns the array no longer including 'hash browns'