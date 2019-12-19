/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
/*    do the following transformations to the array <strong>fruits</strong>:
remove the first and the last element, add an element "banana" at the start of the array,
    and add an element "kiwi" at the end. */

(function() {
    document.getElementById("run").addEventListener("click", function() {
    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
// shift removes the first element "pomme" from fruits
        fruits.shift();
fruits.unshift("banana");    // Adds a new element "banana" to fruits
// pop removes the last element from an array
        fruits.pop();

// push adds a new element ("Kiwi") to fruits at the end
        fruits.push("Kiwi");
        alert(fruits);
    });
})();