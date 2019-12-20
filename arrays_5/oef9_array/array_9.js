(function() {
    document.getElementById("run").addEventListener("click", function() {

        var numberss=[1,4,3,2,9,6,10,8,5,7];
        var sumOfNumbers=0;
        var AverageNumber=0;

        numberss.sort(function(a, b){return a - b});

        var smallestNumber=numberss[0];
        var biggestNumber=numberss[9];

        document.getElementById("min").innerText=smallestNumber;
        document.getElementById("max").innerText=biggestNumber;

       for(i=0;i<=numberss.length;i++) {
           var list = document.getElementsByTagName("tr")[0];
           list.getElementsByTagName("td")[i].innerHTML = numberss[i];

           sumOfNumbers+=numberss[i];
           document.getElementById("sum").innerText=sumOfNumbers;
           AverageNumber=(sumOfNumbers/10);
           document.getElementById("average").innerText=AverageNumber;
       }
// Nu werkt het prima. Maar wat ik niet begrijp is waarom ik de drie regels onder :sumOfNumbers+=numberss[i];
// niet buiten de for lus kan zetten en waarom ze dan niet meer werken. Een for-lus heeft toch geen scope zoals een functie?!
});
})();