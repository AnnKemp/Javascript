/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

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
        var trueAge;

        if(maand<dobMonth){
            trueAge=ageYear-1;
        }else if(dag<dobDay){
            trueAge=ageYear-1;
        }else if((maand == dobMonth)&&(dag == dobDay)){
            alert("Hip, hip, hoeray! Happy Birthday!");
            trueAge=ageYear;
        }

        // nog testen op maand en dag, dat kan nog een verschil geven van een jaar dat moet ik nog maken

        // de leeftijd in een aparte paragraaf aan de pagina toekennen
        var node = document.createElement("p");
        var textnode = document.createTextNode("Your age is: "+trueAge);
        node.appendChild(textnode);
      document.getElementsByClassName("explain")[0].appendChild(node);

    });

})();