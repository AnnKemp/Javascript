
(function() {

window.addEventListener("load", function(){

    var txt=document.getElementById("target").innerText;
    document.getElementById("target").innerText="";

    var i = 0;
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

  typeWriter();
});
})();
/* interessante code ook met de setTimeout functie: een venster openen en sluiten:

var myWindow = window.open("", "", "width=200, height=100");
myWindow.document.write("<p>This is 'myWindow'</p>");
setTimeout(function(){ myWindow.close() }, 3000);

 */