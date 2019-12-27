
(function() {
  document.getElementById("run").addEventListener("click", function(){

   let value_one=document.getElementById("pass-one").value;
   let value_two=document.getElementById("pass-two").value;
   let border_Color_1=document.getElementsByTagName("input")[0];
   let border_Color_2=document.getElementsByTagName("input")[1];

   if(value_one === value_two){
       border_Color_1.style.borderColor = "green";
       border_Color_2.style.borderColor = "green";
       alert("You may pass!");
   }else{
       border_Color_1.style.borderColor = "red";
       border_Color_2.style.borderColor = "red";
       alert("You shall not pass!");
   }

  });
})();