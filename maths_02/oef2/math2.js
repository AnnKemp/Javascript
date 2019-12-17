

var pluske = document.getElementById("addition").innerText;
var minneke=document.getElementById("substraction").innerText;
var maal=document.getElementById("multiplication").innerText;
var delen=document.getElementById("division").innerText;


function rekenen(teken) {

    var resultaat;
    var waardeEen = document.getElementById("op-one").value;
    var waardeTwee = document.getElementById("op-two").value;

    var terug="Het resultaat is: ";

    switch (teken) {
        case "+":
            resultaat = (parseInt(waardeEen) + parseInt(waardeTwee));
            terug+=resultaat;

            break;
        case "-":
            resultaat = (parseInt(waardeEen) - parseInt(waardeTwee));
            terug+=resultaat;

            break;
        case "÷":
            resultaat = (parseInt(waardeEen) / parseInt(waardeTwee));
            terug+=resultaat;

            break;
        case "×":
            resultaat = (parseInt(waardeEen) * parseInt(waardeTwee));
            terug+=resultaat;

            break;
        default:
            terug = "En wat wou je berekenen . . . ?";
    }
    document.getElementById("calcul").innerHTML=terug;
}

document.getElementById("addition").addEventListener("click", function(){
    rekenen(pluske);
});
document.getElementById("multiplication").addEventListener("click", function(){
    rekenen(maal);
});
document.getElementById("substraction").addEventListener("click", function(){
    rekenen(minneke);
});
document.getElementById("division").addEventListener("click", function(){
    rekenen(delen);
});

