/* When you click the button, increment the counter by 1 and display the new value in the target
paragraph. Use <strong>localStorage</strong> to save the counter, and to read the counter value (and
display it) when the page is reloaded.
<p id="target" class="counter">0</p>
 <button type="button" id="increment">Increment and store</button>
 */
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage2

(function() {
    document.getElementById("increment").addEventListener("click", function () {
        // 1) checken of local storage door de browser ondersteund wordt
    if (typeof(Storage) !== "undefined") {
        let storag = localStorage.getItem("teller");

        if (storag){
            counter = localStorage.getItem("teller");
        } else {
            let counter = 0;
        }
           counter=parseInt(counter);
            counter+= 1;

        //  de nieuwe waarde opslagen in de localstorage
            localStorage.setItem("teller", counter);
            // én de stand tonen aan de user van de website
       document.getElementById("target").innerHTML= counter;
    }else {
        document.getElementById("target").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
// ok eerst werkte de teller goed en het tonen in de pagina, nu heb ik de localstorage toegevoegd en getest, deze werkt nu goed maar nu doet de teller het weer niet meer goed in plaats van op te tellen concateneerd ie nu!
    });
})();
