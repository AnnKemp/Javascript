
(function() {
    let x=460;
    let y=0;
    let v=0;
    let w=0;
    let a="00";
    let b="00";
    let c="00";
    /*function some_func(otherFunc, ev) {
        // magic happens
    }
    someObj.addEventListener("click", some_func.bind(null, some_other_func), false);*/

    document.getElementById("part-one").addEventListener("click", functionEen);
    document.getElementById("part-two").addEventListener("click", functionTwee);
    document.getElementById("part-three").addEventListener("click", functionDrie);
    document.getElementById("part-four").addEventListener("click", functionVier);

        function functionEen() {
            if ((x >= 460) && (x <= 499)) {
                x += 1;

     document.getElementById("target").innerHTML="+0"+"<span>"+x+"</span>"+"<span>"+a+"</span"+"<span>"+b+"</span>"+"<span>"+c+"</span>";

            }
        }
        function functionTwee() {
            if ((y >= 0) && (y <= 99)) {
                y += 1;
                if(y<10){
                    a="0"+"<span>"+y+"</span>"
                }else{
                    a=y;
                }
   document.getElementById("target").innerHTML="+0"+"<span>"+x+"</span>"+"<span>"+a+"</span"+"<span>"+b+"</span>"+"<span>"+c+"</span>";
            }
        }
         function functionDrie() {
             if ((v >= 0) && (v <= 99)) {
                 v += 1;
                 if(v<10){
                     b="0"+"<span>"+v+"</span>"
                 }else{
                     b=y;
                 }
   document.getElementById("target").innerHTML="+0"+"<span>"+x+"</span>"+"<span>"+a+"</span"+"<span>"+b+"</span>"+"<span>"+c+"</span>";
             }
         }
            function functionVier() {
                if ((w >= 0) && (w <= 99)) {
                    w += 1;
                    if(w<10){
                        c="0"+"<span>"+w+"</span>"
                    }else{
                        c=w;
                    }
  document.getElementById("target").innerHTML="+0"+"<span>"+x+"</span>"+"<span>"+a+"</span"+"<span>"+b+"</span>"+"<span>"+c+"</span>";
                }
            }
})();
/*
 x = sumAll(1, 123, 500, 115, 44, 88);
 

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
 */