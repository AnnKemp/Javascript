

(function() {
    var i=0;
//<input type="text" name="pass-one" id="pass-one" />
    document.getElementById("pass-one").addEventListener("keypress", function(e){
    //document.onkeypress = function (e) {
        e = e || window.event;
        i+=1;
           if(i>=8) {
               /*
               let patter =/^[a-z0-9_]{8, }$/i;
               var testen = waarde.match(patter); // function match()*/
                   let waarde = document.getElementById("pass-one").value;
                   var patt = /\d{2}/g;  // pattern: contains 2 digits                   if(!pattern.test(text.value))
                   var result = waarde.match(patt);

                   if (result) {
                       document.getElementById("validity").innerText = "ok";
                   } else {
                       document.getElementById("validity").innerText = "min 8 characters and contains at least two numbers";
                   }
               }
    });
})();