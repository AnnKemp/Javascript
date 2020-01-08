/*<p>When you click on the button, get the id from the form, then delete the corresponding X-Men in the API and display the result of your query in the console. </p>
<p>You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.</p>*/

(() => {
    document.getElementById("run").addEventListener("click", function(){

let nameHero=document.getElementById("hero-id").value;

fetch("http://localhost:12345/api.json")
            .then((response) => response.json())

            .then((data) => {
                //a = data.heroes.length+1;
                for(var i = 0; i < data.heroes.length; i++){
                    if (data.heroes[i].name == nameHero) {
                         data.heroes.splice(i, 1);
                    }
                }
                // toont de data in de console
                data.heroes.forEach(thisFunction);

                function thisFunction(item, index) {
                    console.log(item, index);
                }
                console.log('Success:', data); // om te checken of de data succesvol in de json-file geplaatst zijn
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    });
})();