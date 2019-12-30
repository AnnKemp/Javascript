(function() {

    var x=document.getElementById("target").innerText;
   x.style.fontFamily="helvetica, sans-serif"; // de font family toekennen
   x.style.color="#6666ff";
        //x.style.fontSize ="44px";

// x in een array van letter en spaties splitsen via split("");
    var res = x.split("");
    var i;
    let resultaat=0;

  for(i=0;i<res.length;i++) {
        resultaat=res[i].style.fontSize=i+"px";
   }
    document.getElementById("target").innerText=resultaat;
})();
// "wft" Style = "width:600px; filter:wave(add=0, freq=4, light=0, phase=0, strength=5)"  in css
//<STYLE type=text/css>H1 {
// 	FILTER: wave(add=0,freq=0,light=0,phase=0,strength=0); HEIGHT: 100px; POSITION: relative; WIDTH: 100px
// }


// I love this solution (which I found online) but it is in jquery and we are not there yet
//https://tobiasahlin.com/moving-letters/#9