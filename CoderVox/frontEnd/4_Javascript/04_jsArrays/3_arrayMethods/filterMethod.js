// 11.5 FILTER METHOD
// returns an array made from elements that pass a test perfomed on another array. it does NOT change the original array
var numbers = [1, 10, 13, 37]
function over14(yes){    // number is essentially a place holder for each element in the array
    return yes > 14;
}
var check = numbers.filter(over14);
console.log(check); // this will return 37