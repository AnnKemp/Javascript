(function() {
/*One more exercise in creating the worst possible user interface for dialing a phone number: each set
    of numbers behaves as a slot machine in the casino. When you click a button, a random value is
    picked between the values specified by the <em>data-min</em> and <em>data-max</em> attributes.
        Display the number (with a leading 0) in the target paragraph.
*/

let waarde=0;
let knoppen=[];
let speed = 50;
let myVar;
let result=[];

function slotMachine(){
    waarde=Math.floor(Math.random() * 100); // math random number between 0 and 99

// put the value in the last three of the value fields
    for(i=1;i<=3;i++) {
        document.getElementsByTagName("input")[i].value = waarde;
        result=document.getElementsByTagName("input")[i].value;
        // hier die waarde opvangen om die dan weer te kunnen geven in het target gedeelte
    }
    myVar=setTimeout(slotMachine, speed);
}
//-------------------------------------------- einde function slotMachine --------------------------------------------------------------

    slotMachine();  // aanroepen function slotmachine

//-------------------------------------------------begin function stop slotMachine------------------------------------------------------------
    function myStopFunction(e) {
        alert("de "+e.id+"werkt!");
        //clearTimeout(myVar);
        document.getElementById("target").innerHTML="+0"+"<span>"+result[0]+"</span>"+"<span>"+result[1]+"</span"+"<span>"+result[2]+"</span>"+"<span>"+result[3]+"</span>";
    }
//--------------------------------------------einde function stop slotMachine----------------------------------------------------------

    knoppen=document.getElementsByTagName("button");

    for(y=0;y<=3;y++) {
        knoppen[y].addEventListener('click', myStopFunction(knoppen[y]), false);
    }
})();