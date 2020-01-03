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

function slotMachine(){
    waarde=Math.floor(Math.random() * 100); // math random number between 0 and 99

// put the value in the last three of the value fields
    for(i=1;i<=3;i++) {
        document.getElementsByTagName("input")[i].value = waarde;
    }
    myVar=setTimeout(slotMachine, speed);
}
//-------------------------------------------- einde function slotMachine --------------------------------------------------------------

    slotMachine();  // aanroepen function slotmachine

//-------------------------------------------------begin function stop slotMachine------------------------------------------------------------
    function myStopFunction(e) {
        alert("de "+e.id+"werkt!");
        //clearTimeout(myVar);
    <p id="target">+460000000</p>
    }
//--------------------------------------------einde function stop slotMachine----------------------------------------------------------

    knoppen=document.getElementsByTagName("button");

    for(y=0;y<=3;y++) {
        knoppen[y].addEventListener('click', myStopFunction(knoppen[y]), false);
    }
})();