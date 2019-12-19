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

        var result;

        fruits.forEach(myFunction);

        function myFunction(item, index) {

        if(item=="apple"){
            result="yes";
        }else{
            result="no";
        }

        console.log(result);
        }
        var ages = [3, 10, 18, 20];

        function checkAdult(age) {
            return age >= 18;
        }

        function myFunction() {
            document.getElementById("demo").innerHTML = ages.find(checkAdult);
        }
});
})();