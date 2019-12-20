(function() {

    document.getElementById("run").addEventListener("click", function() {

    var people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];
//<p>When you click the button, display (in the console ) the total of the persons' ages in the array
   // <strong>people</strong>. Use the <em>reduce method</em>.</p>

        var sumOfNumbers=0;

        people.forEach(myFunction);

        function myFunction(item, index) {

            sumOfNumbers+=item.age;
        }

        console.log(sumOfNumbers);

        /*
        function getSum(total, leeftijd) {
            return total + Math.round(num);
        }

        function myFunction(item) {
            var resultaat = people.reduce(getSum, 0);
            console.log(resultaat);
        }*/
});
})();