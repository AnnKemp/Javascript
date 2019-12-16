var teken;

var plus = document.getElementById("addition").innerText;
var min=document.getElementById("substraction").innerText;
var maal=document.getElementById("multiplication").innerText;
var delen=document.getElementById("division").innerText;
// dus de tekens worden zonder problemen hierboven opgehaald, dit heb ik getest met een alert();

document.getElementById("addition").addEventListener("click", rekenen(plus));
document.getElementById("substraction").addEventListener("click", rekenen(min));
document.getElementById("multiplication").addEventListener("click", rekenen(maal));
document.getElementById("division").addEventListener("click", rekenen(delen));

function rekenen(teken) {
    alert("de functie wordt aangeroepen"+teken);
    var resultaat;
    var waardeEen = document.getElementById("op-one").value;
    var waardeTwee = document.getElementById("op-two").value;
    var terug= document.getElementById("calcul").innerHTML;
    terug="Het resultaat is: ";

    switch (teken) {
        case "+":
            resultaat = (parseInt(waardeEen) + parseInt(waardeTwee));
            terug+=resultaat;
            alert(resultaat);
            break;
        case "-":
            resultaat = (parseInt(waardeEen) - parseInt(waardeTwee));
            terug+=resultaat;
            alert(terug);
            break;
        case "/":
            resultaat = (parseInt(waardeEen) / parseInt(waardeTwee));
            terug+=resultaat;
            alert(terug);
            break;
        case "*":
            resultaat = (parseInt(waardeEen) * parseInt(waardeTwee));
            terug+=resultaat;
            alert(terug);
            break;
        default:
            terug = "En wat wou je berekenen . . . ?";
    }
}