(function() {
    document.getElementById("run").addEventListener("click", function() {

        var numberss=[1,2,3,4,5,6,7,8,9,10];
        var sumOfNumbers=0;

       for(i=0;i<=numberss.length;i++) {
           var list = document.getElementsByTagName("tr")[0];
           list.getElementsByTagName("td")[i].innerHTML = numberss[i];

            sumOfNumbers+=numberss[i];
            document.getElementById("sum").innerText=sumOfNumbers;
       }

       alert(numberss);
      var sorted_Array=numberss.sort(function(a, b){return a - b});
        alert(sorted_Array);

        var smallestNumber=sorted_Array[0];
        var biggestNumber=sorted_Array[9];
        var AverageNumber="nog niets";

        document.getElementById("min").innerText=smallestNumber;
        document.getElementById("max").innerText=biggestNumber;
        document.getElementById("average").innerText=AverageNumber;

    /*<p>When you click the button, display the ten elements of an array of
        10 numbers (between 1 and 100) in the table. Then display in the definition list:
            the smallest number, the biggest number, the sum of all numbers, and their average.</p>*/
        //}
});
})();