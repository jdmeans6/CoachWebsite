// example object
var onlineOrder = {
    product: 'bread',
    quantity: 1,
    delicious: true,
    notes: 'extra moist'
}

// accessing these objects
onlineOrder.product;        // this will return 'bread'
onlineOrder['quantity']     // this will return 1

// updating the properties in an object
onlineOrder.product = 'cake';   // this changes the value of the product above from 'bread' to 'cake'

// methods
var onlineOrder2 = {
    product: 'toast',
    quantity: 1,
    delicious: true,
    shippingCost: function(){
        return 'Shipping is free'
    },
    notes: 'hard'
}
onlineOrder2.shippingCost();    // this returns the string 'Shipping is free'

var onlineOrder3 = {
    product: 'toast',
    quantity: 1,
    delicious: true,
    shippingCost: function(person){
        return `Shipping is free, ${person}!`
    },
    notes: 'hard'
}
console.log(onlineOrder3.shippingCost('Jordan'));   // this returns the string above with the name thats passed in