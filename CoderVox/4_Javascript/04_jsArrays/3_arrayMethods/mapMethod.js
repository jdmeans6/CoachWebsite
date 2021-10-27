// 11.5 MAP METHOD
// the map method calls a function on every single element in an array, and makes a new array with the results
var people = ['jordan', 'jensen', 'keaton']
function letters(letter){
    return letter.toUpperCase();
}

var newPeople = people.map(letters);
console.log(newPeople); // this will return the above array with the names in all caps