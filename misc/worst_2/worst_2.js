
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

        //document.getElementById("target").innerHTML=result[0];
        }
    });
    document.getElementById("part-two").addEventListener("click", function(){

        if((y >= 0)&&(y <= 99)){
            y+=1;
            result[1]=y;
        document.getElementById("target").innerHTML=result[1];
        }
    });
    document.getElementById("part-three").addEventListener("click", function(){
       v+=1;
        if((v >= 0)&&(v <= 99)){
            document.getElementById("target").innerHTML=v;
        }

    });
    document.getElementById("part-four").addEventListener("click", function(){
        w+=1;
        if((w >= 0)&&(w <= 99)){
            document.getElementById("target").innerHTML=w;
        }

    });
    //let place=document.getElementById("target").innerHTML;
   // place=x;
    document.getElementById("target").innerHTML=result[0];
    //if(y< 10){ y="0"+y; } if(v< 10){ v="0"+v; } if(w< 10){ w="0"+w; }

 // document.getElementById("target").innerHTML=x;
})();