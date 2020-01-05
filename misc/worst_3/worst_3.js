(function() {

let waarde=0;
let waarde_2=0;
let knoppen=[];
let speed = 100;
let result=[];
let myVar;

function slotMachine(){
    waarde=Math.floor(Math.random() * 100); // math random number between 0 and 99
    waarde_2=Math.floor(Math.random() * (499 - 460)) + 460; // math random number between data-min="460" data-max="499"

// put the value into the value fields
    for(i=0;i<=3;i++) {
        let x = document.getElementsByTagName("input")[i].getAttribute("data-min");
        if(x == "460"){
            document.getElementById("part-one").value=waarde_2;
        }else if(x == "00"){
            document.getElementsByTagName("input")[i].value = waarde;
        }
            result[i] = document.getElementsByTagName("input")[i].value;
    }
    document.getElementById("target").innerHTML="+0"+"<span>"+result[0]+"</span>"+"<span>"+result[1]+"</span>"+"<span>"+result[2]+"</span>"+"<span>"+result[3]+"</span>";
    /*setInterval(function() {
        // Do something every 9 seconds
    }, 9000);*/
 myVar=setTimeout(slotMachine, speed);

}
    slotMachine();  // call function slotmachine
//-------------------------------------------------begin function stop slotMachine------------------------------------------------------------
  function myStopFunction(e) {
      let idKnop;
      idKnop=(e.id);

      /*function some_func(otherFunc, ev) {
     // magic happens
 }
 someObj.addEventListener("click", some_func.bind(null, some_other_func), false);*/

        if(idKnop=="fix-part-one"){
            if (!myVar) {
                myVar = setTimeout(function(){slotMachine();}, speed);
                e.innerHTML="stop";
            } else {
                clearTimeout(myVar);
                myVar = null;
                e.innerHTML="start";
                e.removeEventListener("click", function(){});
                document.getElementsByTagName("input")[0].value=this.value;
            }

         } else if (idKnop=="fix-part-two") {
            if (!myVar) {
                myVar = setTimeout(function () {
                    slotMachine();
                }, speed);
                e.innerHTML = "stop";
            } else {
                clearTimeout(myVar);
                myVar = null;
                e.innerHTML = "start";
            }
        } else if (idKnop=="fix-part-three"){
            if (!myVar) {
                myVar = setTimeout(function(){slotMachine();}, speed);
                e.innerHTML="stop";
            } else {
                clearTimeout(myVar);
                myVar = null;
                e.innerHTML="start";
            }
        }
        else if (idKnop=="fix-part-four"){
                if (!myVar) {
                    myVar = setTimeout(function(){slotMachine();}, speed);
                    e.innerHTML="stop";
                } else {
                    clearTimeout(myVar);
                    myVar = null;
                    e.innerHTML="start";
                }
        }
    }
//--------------------------------------------einde function stop slotMachine-----------------------------------------------------------//
    // select buttons and on click call myStopFunction
    knoppen=document.getElementsByTagName("button");

    for(y=0;y<=3;y++) {
        knoppen[y].addEventListener('click', function() {
               myStopFunction(this);
        } , false);
    }
   // this geeft ook de id van de knoppen door en dit kan dan weer gebruikt worden in de stop-functie
})();
/*
<h1 onclick="changeText(this)">Click on this text!</h1>
<script>
function changeText(id) {
    id.innerHTML = "Ooops!";
} */