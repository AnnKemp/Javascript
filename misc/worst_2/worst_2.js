
(function() {
    let x=460;
    let y=0;
    let v=0;
    let w=0;
    let result=[];
    document.getElementById("part-one").addEventListener("click", function(){

        if((x >= 460)&&(x <= 499)){
            x+=1;
            result[0]=x;

            const iterator = result.values();
            for (const value of iterator) {
                document.getElementById("target").innerHTML=result;
            }
            return result;
        }
    });
    document.getElementById("part-two").addEventListener("click", function(){

        if((y >= 0)&&(y <= 99)){
            y+=1;
            result[1]=y;

            const iterator = result.values();
            for (const value of iterator) {
                document.getElementById("target").innerHTML=result;
            }
            return result;
        }
    });
    document.getElementById("part-three").addEventListener("click", function(){

        if((v >= 0)&&(v <= 99)){
            v+=1;
            result[2]=v;

            const iterator = result.values();
            for (const value of iterator) {
                document.getElementById("target").innerHTML=result;
            }
            return result;
        }
    });
    document.getElementById("part-four").addEventListener("click", function(){

        if((w >= 0)&&(w <= 99)){
            w+=1;
            result[3]=w;

            const iterator = result.values();
            for (const value of iterator) {
               alert("result");
                document.getElementById("target").innerHTML=result;
            }

            return result;
            //document.getElementById("target").innerHTML=w;
        }
    });
    //if(y< 10){ y="0"+y; } if(v< 10){ v="0"+v; } if(w< 10){ w="0"+w; } // nog een nul voorsteken als onder de tien
})();