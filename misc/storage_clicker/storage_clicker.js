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
            counter = localStorage.getItem("teller"); // ok deze onthoud wél maar voor hoelang zou oneindig moeten zijn maar lijkt me toch niet zo . . .
            //alert(counter);   // om te testen of ie wel effectief iets opslaat
        } else {
            let counter = 0;
            // item om data lokaal op te slaan aanmaken en vullen
            localStorage.setItem("teller", counter);
        }
            parseInt(counter); // normaal zou ie hier  toch een getal van maken om dan hieronder op te tellen en dan te vertonen?! mmm da's voor morgen . . . iets maakt een string van dat getal...
            counter+= 1;
        // item om data lokaal op te slaan/te vullen? nog even checken of dit de juiste verwoording is?!
            localStorage.setItem("teller", counter);
            // de stand tonen aan de user van de website
            document.getElementById("target").innerHTML = counter;
    }else {
        document.getElementById("target").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
// ok eerst werkte de teller goed en het tonen in de pagina, nu heb ik de localstorage toegevoegd en getest, deze werkt nu goed maar nu doet de teller het weer niet meer goed in plaats van op te tellen concateneerd ie nu!
 //https://www.w3schools.com/jsref/prop_win_localstorage.asp    // heeft misschien iets te maken met die read-only
    });
})();