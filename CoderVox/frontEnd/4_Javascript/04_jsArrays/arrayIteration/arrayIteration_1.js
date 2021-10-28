// using a for loop to iterate over an array
var coffee = ['americano', 'caffe latte', 'black coffee']
// for(var i = 0; i < coffee.length; i++){ // the loop will never go past the length of the array
//     document.write(coffee[i])
// }

function getCoffee(){
    for (i = 0; i < coffee.length; i++){
        document.write(`<div>${coffee[i]}</div>`)
    }
}
getCoffee(); // calling this function uses the for loop above and iterates throught the coffee array at the top of the page