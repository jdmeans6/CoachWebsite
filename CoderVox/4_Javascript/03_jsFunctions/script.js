// 10.2 DEFINING FUNCTIONS
    // Usually want to name the function what it's going to do. In this instance, the name of the function is message and when it is called you see a message on the screen.
function message(){
    document.write('Hello!<br>')
}
message();



// 10.3 PARAMETERS AND ARGUMENTS
function customer(name){
    document.write(`Hello ${name}, it's good to see you again!<br>`)
}
// customer(prompt('What is your name?')); // prompts the user for their name and when they type their name which then shows up on the screen after.



// 10.4 MULTIPLE PARAMETERS
function multiply(num1, num2, num3){    // function takes 3 parameters and you can do whatever with them.
    console.log(num1 * num2 * num3)
}



// 10.5 EXCERCISE
function theNums(a, b, c){
    if (a + b > 10){
        console.log(`true. ${a} plus ${b} is greater than 10 :). that third number is irrelavant this time bruh.`)
    } else if (c - b < 10){
        console.log(`true. ${c} minus ${b} is less than 10 ;). i said screw your first number lol`)
    } else {
        console.log(`nah. ${a} plus ${b} is not greater than 10, and ${c} minus ${b} is not less than 10, sorry bruh.`)
    }
}



// 10.6 RETURNING VALUES
// 10.7 RETURNING VALUES PT 2
function emotion(feelings){
    return feelings;
}
var currentFeeling = emotion('love')

function theNumber(number){
    return number;
}
var times = theNumber(3)

function restaurants(place1){
    console.log(`I ${currentFeeling} eating at ${place1} and I've been there ${times} times.`)
}
restaurants('Culvers');



// 10.9 EXERCISE
var coffee1 = 'french vanilla';
var coffee2 = 'hazelnut'
var coffee3 = 'caramel'
function customer1(flavor){
    var coffee1 = 'hazelnut'
    console.log(coffee1)                // this console logs hazelnut due to local scope
    return flavor;                      // see description below
}
var theOrder = customer1(coffee1)       //
document.write(theOrder)                // this will return french vanilla because the function is called in the variable below outside of the function meaning that the coffee1 that is used for the argument is grabbed from the variable above the function because it does not have access to the variable inside of the customer1 function.



// 10.10 CALLBACK FUNCTIONS



// 10.11 ANONYMOUS FUNCTIONS



// MESS AROUND CODE:
// var num1 = prompt('pick a number')
// var num2 = prompt('pick another number')
// function addMe(num1, num2){
//     var total = num1 + num2;
//     document.write(`Total: ${total}`)
// }
// addMe();