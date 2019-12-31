(function() {
    window.addEventListener("load", function(){

        // een random nummer van 1 tot 100 genereren
        let x=Math.floor(Math.random() * 101);
        let y=0;

function raden() {
    let guess = prompt("Please guess/enter your lucky number");
    guess = parseInt(guess);

            if (guess < x){
                alert("higher");
                y+=1;
                raden();
            }else if(guess > x){
                alert("lower");
                y+=1;
                raden();
            }else if (guess==x){
               alert("that's it! you needed"+y+" guesses");
            }
}
        raden();
    });

})();