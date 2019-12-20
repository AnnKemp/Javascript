(function() {

    //https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Introduction.html

    document.getElementById("run").addEventListener("click", function() {


    var people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];
        /* When you click the button, create a new array from the array <strong>people</strong>,
            containing only the people whose <em>age is more than 18 years</em>. Display the resulting array in
            the console.*/

        people.forEach(myFunction);

        function myFunction(item, index) {

            if(18 >= item.age){
                console.log(item, index);
            }
        }

    // yo.filter(callback): return a new array, containing the items for which callback returned true. For example,
    // var fruits = ['apple', 'orange', 'banana'];
    // var result = fruits.filter( function(item) {
    //    console.log('processing item: ' + item);
    //    return /.*e$/.test(item);   // ends with 'e'?
    // });
    // console.log(result);
    //       // processing item: apple
    //       // processing item: orange
    //       // processing item: banana
    //       // ["apple", "orange"]ur code here

    });
})();