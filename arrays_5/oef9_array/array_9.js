(function() {

    document.getElementById("run").addEventListener("click", function() {

        var numberss=[1,2,3,4,5,6,7,8,9,10];

       for(i=0;i<=numberss.length;i++) {
            var list = document.getElementsByTagName("tr")[0];
            list.getElementsByTagName("td")[i].innerHTML = numberss[i];
        }
    /*<p>When you click the button, display the ten elements of an array of
        10 numbers (between 1 and 100) in the table. Then display in the definition list:
            the smallest number, the biggest number, the sum of all numbers, and their average.</p>*/



});
})();