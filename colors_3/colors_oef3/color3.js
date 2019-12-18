(function() {

document.getElementById("run").addEventListener("click", function(){

    var letter="0123456789ABCDEF";
    var color="#";

    for(var i=0; i<6;i++){
        color+=letter[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = color;
});

})();