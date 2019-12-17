(function() {
 /*   In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3,
        "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these. */
for(i=1;i<=100;i++) {

    if((i%3 == 0)&&(i%5 == 0)){
        console.log("fizzbuzz");
    }
    // het is me ne modulus: als er gene rest is na de deling (dus 0) dan is het 'ok'
    else if(i%3 == 0){
        console.log("fizz");
        }
    else if(i%5 == 0){
        console.log("buzz");
    }
     else{
    console.log(i);
    }

}

})();