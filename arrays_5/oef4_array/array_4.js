(function() {
    document.getElementById("run").addEventListener("click", function() {
    //<When you click the button, display on the console, one after the other, each value of the array
    //<strong>fruits</strong>. Use the <em>forEach method

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

        fruits.forEach(myFunction);

        function myFunction(item, index) {
            console.log(item);
        }

    }); // your code here

})();