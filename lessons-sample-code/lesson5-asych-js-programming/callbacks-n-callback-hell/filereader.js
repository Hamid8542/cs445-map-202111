/**
 * filereader.js
 */
const fs = require("fs");
fs.readFile("products.json", function (err, products) {
    if (err) {
        console.error(err);
    }
    const arrayOfProducts = JSON.parse(products);
    console.log(arrayOfProducts);
    arrayOfProducts.forEach(function (p) {
        console.log(`${p.productId} - ${p.name}`);
    });
});
