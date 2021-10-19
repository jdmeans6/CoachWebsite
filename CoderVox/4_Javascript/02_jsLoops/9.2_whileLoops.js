var i = 1;
// this console logs 1, 2, 3... all the way to 14 in the console because it runs through the loop adding 1 each time starting at 1 and 
while(i < 15) {
    console.log(i);
    i++;
}

// Exercise: How would you get it to do 1-15?
    // all you do is add the <= (less than or equal too)

// Challenge of printing out "I am number 1!" all the way to 10 on the screen.

var i = 1;
while (i <= 10) {
    document.write(`<p>I am number ${i}!</p>`)
    i++;
}