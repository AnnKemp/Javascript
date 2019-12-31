
(function() {
// via "change" de slidermovement aanvoelen

document.getElementById("slider").addEventListener("change", function(e){
      e = e || window.event;

    let x= document.getElementById("slider").value;
    document.getElementById("target").innerText="0"+x;

    }, false);
})();

