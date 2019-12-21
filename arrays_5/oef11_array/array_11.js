

(function() {

    document.getElementById("run").addEventListener("click", function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    /*
When you click the button, remove the duplicates from the array fruits
 and display the resulting array in the console.
    Each value should be there one time, and one time only.   */

    // https://stackoverflow.com/questions/55255260/remove-all-of-the-duplicate-numbers-in-an-array-of-numbers

// ik heb deze elegante oplossing online gevonden

// Use to remove duplicate elements from the array   // een gelijkaardige oplossing van developer mozilla.org hieronder

       /* const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

        console.log([...new Set(numbers)])   */

        console.log(Array.from(new Set(fruits)));

//-----------------------------------------------------------------------------------------------------------------------------------------
   /*     let arr = [1, 2, 4, 2, 3, 3, 4, 5, 5, 5, 8, 8, 9, 10];
        let unique = new Set();
        let repeated = Array.from(arr.reduce((acc, curr) => {
            acc.has(curr) ? unique.delete(curr) : acc.add(curr) && unique.add(curr);
            return acc;
        }, new Set()));

        console.log(Array.from(unique))
        console.log(repeated)
//-------------------------------------------------------------------------------------------------------------------------------//
        var arr = [1, 2, 4, 2, 3, 3, 4, 5, 5, 5, 8, 8, 9, 10];
        var map = {};
        var finalResult = [];
        for (var i = 0; i < arr.length; i++) {
            if (!map.hasOwnProperty(arr[i])) {
                map[arr[i]] = true;
                finalResult.push(arr[i]);
            }
        }

//if you need it sorted otherwise it will be in order
        finalResult.sort(function(a, b) {
            return a - b
        });

        console.log(finalResult); */
});
})();
/*
 <script type="text/javascript">

        function removeDuplicates() {

            // Create an array of objects
            books = [
                { title: "C++", author: "Bjarne" },
                { title: "Java", author: "James" },
                { title: "Python", author: "Guido" },
                { title: "Java", author: "James" },
            ];

            // Display the list of array objects
            console.log(books);

            // Declare a new array
            let newArray = [];

            // Declare an empty object
            let uniqueObject = {};

            // Loop for the array elements
            for (let i in books) {

                // Extract the title
                objTitle = books[i]['title'];

                // Use the title as the index
                uniqueObject[objTitle] = books[i];
            }

            // Loop to push unique object into array
            for (i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }

            // Display the unique objects
            console.log(newArray);
        }
*/