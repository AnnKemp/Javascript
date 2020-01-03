(function() {
/*One more exercise in creating the worst possible user interface for dialing a phone number: each set
    of numbers behaves as a slot machine in the casino. When you click a button, a random value is
    picked between the values specified by the <em>data-min</em> and <em>data-max</em> attributes.
        Display the number (with a leading 0) in the target paragraph.
*/
let waarde=0;
let waarde_2=0;
let knoppen=[];
let speed = 50;
let myVar;
let result=[];

function slotMachine(){
    waarde=Math.floor(Math.random() * 100); // math random number between 0 and 99
    waarde_2=Math.floor(Math.random() * (499 - 460)) + 460; // math random number between data-min="460" data-max="499"

// put the value in the last three of the value fields
    for(i=1;i<=3;i++) {
        document.getElementsByTagName("input")[i].value = waarde;

        // hieronder het opvangen van de waarde om daarna in target te tonen
        result[i]=document.getElementsByTagName("input")[i].value;
        // hier die waarde opvangen om die dan weer te kunnen geven in het target gedeelte
    }
    result[0]=waarde_2;
    document.getElementById("part-one").value=result[0];

    document.getElementById("target").innerHTML="+0"+"<span>"+result[0]+"</span>"+"<span>"+result[1]+"</span>"+"<span>"+result[2]+"</span>"+"<span>"+result[3]+"</span>";

    myVar=setTimeout(slotMachine, speed);
}
//-------------------------------------------- einde function slotMachine --------------------------------------------------------------

    slotMachine();  // aanroepen function slotmachine

//-------------------------------------------------begin function stop slotMachine------------------------------------------------------------
    function myStopFunction(e) {
      //  alert("de "+e.id+"werkt!");
        clearTimeout(myVar);
        //e.id.clearTimeout(myVar); // zou ik zo de functie voor alleen die knop kunnen stilleggen?
    }
//--------------------------------------------einde function stop slotMachine----------------------------------------------------------

    knoppen=document.getElementsByTagName("button");

    for(y=0;y<=3;y++) {
        knoppen[y].addEventListener('click', function() {
            myStopFunction(this);
        } , false);
    }
    document.getElementById("fix-part-one").addEventListener("click", function(){
        clearTimeout(myVar);
    });
})();

/*
<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
    id.innerHTML = "Ooops!";
} */