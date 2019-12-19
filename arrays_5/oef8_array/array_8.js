(function() {
    document.getElementById("run").addEventListener("click", function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
/*When you click the button, log in the console if,
    yes or no, there is an <em>apple</em> in the array <strong>fruits</str */
    // your code here

        // zie https://www.w3schools.com/jsref/jsref_find.asp

        var result;
// moet nog uitzoeken hoe het met die fruit-waarde zit die moet worden doorgegeven . . .
        function checkApple(fruit) {

        if(fruit == "apple"){
           return result="yes";
        }else{
           return result="no";
        }
        console.log(fruits.find(checkApple));
        }
});
})();