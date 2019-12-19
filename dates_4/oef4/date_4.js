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

    // gevraagd: Sunday 28 October 2018, 23h32

    var geheelDatum = datum.toDateString();
    var tijd = datum.toLocaleTimeString();
    var geheel=geheelDatum+", "+tijd;

   document.getElementById("target").innerHTML = geheel;

    // your code here

})();





