(function() {
    document.getElementById("run").addEventListener("click", function() {
        /*
// een array met objecten in met alleen eigenschappen in en geen functies
   // , display on the console, one after the other,
   //     the name of each person in the array <strong>people</strong>. Use the <em>forEach method</em>.</p>

        // zie https://www.w3schools.com/jsref/jsref_foreach.asp
        // zie https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_entries
    /*.map(callback): return a new array, which contains all the return value from executing callback on each item. For example,
        var fruits = ['apple', 'orange', 'banana'];
        var results = fruits.map( function(item) {
            console.log('processing item: ' + item);
            return item.toUpperCase();
        });
        console.log(results);
        // processing item: apple
        // processing item: orange
        // processing item: banana
        // ["APPLE", "ORANGE", "BANANA"]
    .filter(callback): return a new array, containing the items for which callback returned true. For example,
        var fruits = ['apple', 'orange', 'banana'];
        var result = fruits.filter( function(item) {
            console.log('processing item: ' + item);
            return /.*e$/.test(item);   // ends with 'e'?
        });
        console.log(result);
        // processing item: apple
        // processing item: orange
        // processing item: banana
        // ["apple", "orange"]
    .every(callback): return true if callback returns true for ALL items.
            .some(callback): return true if callback returns true for at least one item in the array.
            For detailed specification and examples about a built-in object, check "Core JavaScript References".*/
    var people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
        people.forEach(myFunction);

        function myFunction(item, index) {
            var name=item.firstname+" "+item.lastname;
            console.log(name);
        }

    });
})();
/*
4.13  Associative Array
An associative array is an array of key-value pair. Instead of using numbers 0, 1, 2,... as keys as in the regular
array, you can use anything (such as string) as key in an associative array. Associative arrays are used
 in JavaScript and jQuery.

    JavaScript does not support native associative array (it actually does not support native array too).
    In JavaScript, associative arrays (and arrays) are implemented as objects (to be elaborate later).

You can create an associative array via the Object Initializer. For example,

// Create an associative array of key-value pairs
var aStudent = {
    name:      'peter',  // string
    id:        8888,     // number
    isMarried: false     // boolean
};

// Add a new property via "index" operator, like an array
aStudent['age'] = 24;

// Use for..in loop to access all items
for (key in aStudent) {
    console.log(key + ": " + aStudent[key]);
}
// name: peter
// id: 8888
// isMarried: false
// age: 24

// An associative array is actually an object
console.log(typeof aStudent);  // object

// You can also access a property via "dot" operator, like an object
aStudent.height = 190;
console.log(aStudent.height);   // 190
Take note that Array initializer uses square brackets [ ... ]; while object initializer (for associative array)
 uses curly brackets { ... }.
*/
