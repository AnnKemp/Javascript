
(function() {
//When you click the button, display each month of the specified year that has a Friday 13th.

document.getElementById("run").addEventListener("click", function() {

   var currentyear=document.getElementById("year").value;

    function numberOfFridaythe13thsIn(year){
        for(i=0;i<=11;i++){
            var d = new Date(year, i, 13);
            if(d.getDay() == 5) {
             const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct","nov","dec"];
                alert(monthNames[i]);
            }


        }
    }
         console.log(numberOfFridaythe13thsIn(currentyear));
});

})();