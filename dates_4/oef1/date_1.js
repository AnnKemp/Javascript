

(function() {
    //if it's before 18h
var day="Hello";
var evening="Good evening";

    var datum = new Date();
    var uur = datum.getHours();

    if(uur >= 18) {

        document.getElementsByTagName("p")[1].innerHTML = evening;

    }else{
        document.getElementsByTagName("p")[1].innerHTML = day;

    }

})();