//<p>Listen for changes in the input field and display "ok" in the validity span if the input is at least
//8 characters long and contains at least two numbers.</p>

(function() {
    var i=0;
//<input type="text" name="pass-one" id="pass-one" />
    document.getElementById("pass-one").addEventListener("keypress", function(e){
    //document.onkeypress = function (e) {
        e = e || window.event;
        i+=1;
           if(i>=8) {
               let waarde = document.getElementById("pass-one").value;
               let patt =/^[a-z0-9_]{6,}[0-9]{2,}$/i;

               //var patt = /\d{2}/g;  // pattern: contains 2 digits
               // minimum acht alfanumerische karakters    /^[a-z0-9_]{6,}[0-9]{2,}$/i;     if(!pattern.test(text.value))

               var result = waarde.match(patt); // function match() toepassen
                // het testen op de pattern gaat goed voor de cijfers misschien best ook de hoeveelheid in de pattern steken
               if (result) {
                   document.getElementById("validity").innerText = "ok";
               } else {
                   document.getElementById("validity").innerText = "min 8 characters and contains at least two numbers";
               }
           }
    });
})();