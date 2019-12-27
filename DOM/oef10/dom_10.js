//  <p>When you click the button, check whether the two passwords entered in the input fields are
//                 <em>exactly</em>the same. If they are not, add the class "error" to the input boxes.</p>

(function() {
    document.getElementById("run").addEventListener("click", function(){

        let value_one=document.getElementById("pass-one").value;
        let value_two=document.getElementById("pass-two").value;
        let border_Color_1=document.getElementsByTagName("input")[0];
        let border_Color_2=document.getElementsByTagName("input")[1];

        if(value_one === value_two){
            border_Color_1.classList.remove("error");
            border_Color_2.classList.remove("error");

            border_Color_1.classList.add("good");
            border_Color_2.classList.add("good");
            alert("You may pass!");
        }else{
            border_Color_1.classList.remove("good");
            border_Color_2.classList.remove("good");

            border_Color_1.classList.add("error");
            border_Color_2.classList.add("error");
            alert("You shall not pass!");
        }

    });
})();