
(function() {
//When you click the button, display each month of the specified year that has a Friday 13th.

document.getElementById("run").addEventListener("click", function() {

   var jaar=document.getElementById("year").value;




    const birthday = new Date('August 19, 1975 23:15:30');
    const day1 = birthday.getDay();
// vrijdag : 5

    console.log(day1);
// expected output: 2
    const event = new Date(Date.UTC(jaar));

    //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const options = { year: 'numeric' };

    console.log(event.toLocaleDateString('en-EN', options));
// expected output: Donnerstag, 20. Dezember 2012 */

});

})();