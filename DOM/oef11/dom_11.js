
(function() {
    var i=0;

    document.onkeypress = function (e) {
        e = e || window.event;
      i+=1;
        document.getElementById("counter").innerText=i+"/10";

      if(i>=11){
          let invulveld=document.getElementById("pass-one");
          invulveld.setAttribute("readonly", "readonly");

          document.getElementById("counter").innerHTML=10+"/10 <p>Not more than 10 characters!</p>";
      }
    };
})();