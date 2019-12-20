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

        // zie https://www.w3schools.com/jsref/jsref_find.asp

for (i=0;fruits.length;i++){

        if(fruits[i] == "apple"){
            console.log("yes");
            break;
        }else{
            console.log("no");
        }
}
});
})();