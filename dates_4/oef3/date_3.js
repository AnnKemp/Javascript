/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var datum = new Date();

// display todays day of the week.
    //var dag = datum.getDay();

    var dag = datum.getUTCDate();

    //Note: 0=January, 1=February etc.
    var maand=(datum.getMonth())+1;

    var jaar=datum.getFullYear();
    alert(dag+"-"+maand+"-"+jaar);


})();