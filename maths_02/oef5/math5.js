
// de opdracht: When you click the button, get the number in the input, and show its factorial.
// factorial gegoogled en dat is voor 5: 5!=5x4x3x2x1=120

document.getElementById("run").addEventListener("click", function(){

    var inhoud=document.getElementById("number").value;
    var getal=parseInt(inhoud);

    var i = getal;

    do {
        i--;
        getal=getal*i;

    } while (i >= 2);

document.getElementById("som").innerHTML="The result is: "+getal;
});




