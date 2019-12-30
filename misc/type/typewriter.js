
(function() {

document.getElementById("target").addEventListener("load", function(){

    var txt=document.getElementById("target").innerText;
    document.getElementById("target").innerText=0;
    var i = 0;
    var speed = 3000;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

   // typeWriter();
});
})();