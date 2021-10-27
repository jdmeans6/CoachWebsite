// selecting elements part 1
var theFood1 = document.getElementById('food');     // this grabs the entire h1 from the html file
var theFood2 = document.querySelector('#food');     // this returns the h1 again because it grabs the first matching h1
var theFood3 = document.querySelector('li');        // this will grab glazed because it returns the first matching element


// selecting elements part 2
    // getElementsByTagName()
var theFood4 = document.getElementsByTagName('li'); // this will return all the list items

    // getElementsByClassName()
var theFood5 = document.getElementsByClassName('snack');    // this returns all the list items with the class of snack

    // querySelectorAll()
var theFood6 = document.querySelectorAll('.snack'); // this returns all the class names with the class snack