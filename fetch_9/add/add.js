/*  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

      <p>When you click on the button, retrieve the values of the form and create the new hero in the API.
                <br />Each field must be filled in (it is up to you to manage). </p>
            <p>Display the result of all your heroes in the console. </p>
            <p><strong>Caution: </strong> powers must be stored in the same format as the previous heroes!</p>
            <p>You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.</p>
*/
(() => {  // op de knop klikken om de data op te halen en te vertonen
    document.getElementById("run").addEventListener("click", function(){

       // de gegevens uit de value-velden in het formulier halen
     let heroName=document.getElementById("hero-name").value;
     let heroAlterEgo=document.getElementById("hero-alter-ego").value;
     let heroPowers=document.getElementById("hero-powers").value;
        heroPowers=heroPowers.split();

fetch("http://localhost:12345/api.json")
.then((response) => response.json())
.then((data) => {
    a = data.heroes.length+1;
});

let a;
const newEelement =  {
    id: a,
    name: heroName,
    alterEgo: heroAlterEgo,
    abilities:heroPowers
        };

fetch("http://localhost:12345/api.json")
.then((response) => response.json())
// hieronder wordt via data het oject online toegevoegd
.then((data) => {
    a = data.heroes.length+1;
    data.heroes.push(newEelement);

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