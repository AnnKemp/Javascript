
//On the click to the button, get the birthdate of the visitor and display his/her age

(function() {
    document.getElementById("run").addEventListener("click", function() {

// huidige datum bepalen
    var datum = new Date();
    var dag = datum.getUTCDate();
    //Note: 0=January, 1=February etc.
    var maand=(datum.getMonth())+1;
    var jaar=datum.getFullYear();
    //alert(dag+"-"+maand+"-"+jaar);

    //waarden uit de select halen om de users geboortedatum te weten te komen
    var dobDay=document.getElementById("dob-day").value;
    var dobMonth=document.getElementById("dob-month").value;
    var dobYear=document.getElementById("dob-year").value;
    //alert(dobDay+"-"+dobMonth+"-"+dobYear);

        var ageYear=jaar-dobYear;
        parseInt(ageYear);
        parseInt(dobMonth);
        parseInt(dobDay);
        parseInt(dag);
        parseInt(maand);
        parseInt(jaar);
        var leeftijd;

// dus als de maand kleiner is of de maand gelijk maar de dag kleiner
   if ((maand < dobMonth)||((maand == dobMonth) && (dag < dobDay))){
            leeftijd=ageYear-1;
        }else if((maand == dobMonth)&&(dag == dobDay)){
           alert("Hip, hip, hoeray! Happy Birthday!");
            leeftijd=ageYear;
        }else{
       leeftijd=ageYear;
   }
        // de leeftijd in een aparte paragraaf aan de pagina toekennen
        var node = document.createElement("p");
        var textnode = document.createTextNode("Your age is: "+leeftijd);
        node.appendChild(textnode);
      document.getElementsByClassName("explain")[0].appendChild(node);

    });

})();