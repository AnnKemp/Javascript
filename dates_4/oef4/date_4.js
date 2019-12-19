/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
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
    var geheel=dag+"-"+maand+"-"+jaar;
    alert(dag+"-"+maand+"-"+jaar);

   document.getElementById("target").innerHTML = geheel;

    // your code here

})();





