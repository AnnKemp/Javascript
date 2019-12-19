/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



        //if it's before 17h30
        var day="Hello";
        var evening="Good evening";

        var datum = new Date();
        var uur = datum.getHours();
        var minuten=datum.getMinutes();
        var tijd=uur+"."+minuten;

        if(tijd >= 17.30) {

            document.getElementsByTagName("p")[1].innerHTML = evening;

        }else{
            document.getElementsByTagName("p")[1].innerHTML = day;

        }



})();
© 2019 GitHub, Inc.