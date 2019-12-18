(function() {

document.getElementById("run").addEventListener("click", function(){

    getal1=Math.floor(Math.random() * 10);
    getal2=Math.floor(Math.random() * 10);
    getal3=Math.floor(Math.random() * 10);
    var achtergrondkleur="#"+getal1+getal2+getal3;
    document.body.style.backgroundColor = achtergrondkleur;
});

})();