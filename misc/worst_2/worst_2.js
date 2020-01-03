
(function() {
    let x=460;
    let y=0;
    let v=0;
    let w=0;
    let result=[];

    document.getElementById("part-one").addEventListener("click", function(){

       /* if((x >= 460)&&(x <= 499)){
            x+=1;
            result[0]=x; */

            // Object creation
            var result = {
                x:460,

                waarde1:0,
                waarde2:0,
                waarde3:0,

               if((x >= 460)&&(x <= 499)){
                     x+=1;
                     result.waarde1=x;
                values: function() {
                    }
                }
            };
            // Object creation
            var student = {
                name: "Martin",
                class : "12th",
                section : "A",

                studentDetails : function() {
                    return this.name + " " + this.class
                        + " " + this.section + " ";
                }
            };

/*
            const iterator = result.values();
            for (const value of iterator) {
                (this.value <10){}
                document.getElementById("target").innerHTML=result;
            }*/
        }
    });
    document.getElementById("part-two").addEventListener("click", function(){

        if((y >= 0)&&(y <= 99)){
            y+=1;
            result[1]=y;

            const iterator = result.values();
            for (const value of iterator) {
                value
                document.getElementById("target").innerHTML=result;
            }
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
        }
    });
    document.getElementById("part-four").addEventListener("click", function(){

        if((w >= 0)&&(w <= 99)) {
            w += 1;
            result[3] = w;

            const iterator = result.values();
            for (const value of iterator) {
                document.getElementById("target").innerHTML=result;
            }
        }
    });


})();
document.getElementById("target").innerHTML
    = "+"+result.waarde1+result.waarde2+result.waarde3;