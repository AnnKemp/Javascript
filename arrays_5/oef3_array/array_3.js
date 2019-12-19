(function() {
    document.getElementById("run").addEventListener("click", function() {
   /* When you click the button, display in the console,
        one after the other (use a loop), each value of the <strong>fruits</strong> array.*/
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

 for(i=0;i<fruits.length ;i++){
     console.log(fruits[i]);
 }


    });
})();