/*<p>Display some text inside the target element. Create a wave effect using at least 5 different font
sizes.</p>*/

(function() {
    window.addEventListener("load", function(){

     document.getElementById("sound").autoplay;

    var x=document.getElementById("target").innerText;
    document.getElementById("target").innerText="";

    let el=document.getElementById("target");

        var i = 0;
        var speed = 50;

function typeWriter() {
   if (i<x.length) {

       let letter=x.charAt(i);
        el.style.fontSize=i+"px";
        if(i==x.length/2){
            let y=i-1;
            el.style.fontSize=y+"px";
        }

        document.getElementById("target").innerText +=x.charAt(i);
      // en dan length gedeeld door 4 en het omgedraaide om het wave-effect te bereiken
     // document.getElementById("target").innerText+=x.charCodeAt(i).style.fontSize=i+"px";
            i++;
            setTimeout(typeWriter, speed);
        } }
    typeWriter();
});
})();
// "wft" Style = "width:600px; filter:wave(add=0, freq=4, light=0, phase=0, strength=5)"  in css
//<STYLE type=text/css>H1 {
// 	FILTER: wave(add=0,freq=0,light=0,phase=0,strength=0); HEIGHT: 100px; POSITION: relative; WIDTH: 100px
// }


// I love this solution (which I found online) but it is in jquery and we are not there yet
//https://tobiasahlin.com/moving-letters/#9