 var faker = require("faker");
  
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

var product = faker.commerce.productName();
var price = faker.commerce.price();

console.log("==== Showing my fake productes ====")

for(var i = 0; i< 10; i++){
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}

// Uncomment and try it!
//console.log(randomName);
//console.log(randomEmail);
// console.log(randomCard);