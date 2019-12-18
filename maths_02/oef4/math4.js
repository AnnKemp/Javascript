(function() {

document.getElementById("run").addEventListener("click", function(){

// de inhoud van het invulveld ophalen
   var inhoud=document.getElementById("numbers").value;

    // in onderdelen splitsen om er een array van te maken
  var res = inhoud.split(", ");

    // inhoud van de array ascending sorteren via een ingebouwde functie sort + een naamloze functie daarin
        res.sort(function(a, b){return a-b});

    // array omzetten naar string is blijkbaar niet nodig om deze te tonen in het value-veld
    //var x = res.toString();
    document.getElementById("numbers").value=res;
});

})();