(function() {
    document.getElementById("run").addEventListener("click", function() {

        var numberss=[];
        // een array aanmaken met random numbers tussen 1 en 100
        for(i=0;i<=10;i++) {
            numberss[i]=Math.round((Math.random()) * 100);
        }
        //var numberss=[1,4,3,2,9,6,10,8,5,7]; // een statische array aanmaken met vaste waarden kan ook maar is minder leuk

        var sumOfNumbers=0;                  // variabelen initialiseren
        var AverageNumber=0;                 // variabelen initialiseren

        numberss.sort(function(a, b){return a - b});     // de nummers sorteren van klein naar groot

        var smallestNumber=numberss[0];
        var biggestNumber=numberss[9];

        document.getElementById("min").innerText=smallestNumber;
        document.getElementById("max").innerText=biggestNumber;

       for(i=0;i<=numberss.length;i++) {
           var list = document.getElementsByTagName("tr")[0];
           list.getElementsByTagName("td")[i].innerHTML = numberss[i];

           sumOfNumbers+=numberss[i];
           document.getElementById("sum").innerText=sumOfNumbers;

           // even het gemiddelde berekenen
           AverageNumber=(sumOfNumbers/10);
           document.getElementById("average").innerText=AverageNumber;
       }
// Nu werkt het prima. Maar wat ik niet begrijp is waarom ik de drie regels onder :sumOfNumbers+=numberss[i];
// niet buiten de for-lus kan zetten omdat ze dan niet meer werken. Een for-lus heeft toch geen scope zoals een functie?!
});
})();