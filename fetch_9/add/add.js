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

     //hero-powers daar een array van maken van een string
     let heroPowers=document.getElementById("hero-powers").value;

        //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        heroPowers=heroPowers.split();

// het einde van de array nemen indexOff(-1) negatieve voor het einde, die index +1 shift array? of push array om er vanonder ene bij te steken

        let a = data.heroes[heroes.length+1];

// push object b in array a
      //  var a=[], b={};
      //  a.push(b);
      //  push(); // om item aan het einde van de array toe te voegen

 //---------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------how to format the data to push it into the object array----------------------------------------------------------------------------
   /*     {
            "id": "+a+",
            "name": "+heroName+",
            "alterEgo": "+heroAlterEgo+",
            "abilities":"+heroPowers+"
        }, */

        // die a nog even checken want dat is nog niet helemaal juist

       /*   data.a.id=data.heroes[heroes.length+1];
            data.a.name=heroName;
            data.a.alterEgo=heroAlterEgo;
            data.a.abilities=heroPowers; */
// zie papier tussen je computers
//-------------------------------------------------------- how to place the data on the server in the json file ---------------------------------------------------------------------------------------------------------
/*      // in const data komt de data= het object dat ik online moet plaatsen
const data = { username: 'example' };

fetch("http://localhost:12345/list-to-console_1/api.json"), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
// hieronder wordt via data het oject online toegevoegd
.then((data) => {

  console.log('Success:', data); // om te checken of de data succesvol in de json-file geplaatst zijn
})
.catch((error) => {
  console.error('Error:', error);
});
*/
//--------------------------------------------dit is om al de heroes af te spelen-----------------------------------------------------------------------

        fetch("http://localhost:12345/list-to-console_1/api.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // de data er uit halen
                data.heroes.forEach(thisFunction);

                function thisFunction(item, index) {
                     console.log(item, index);

                     // vanaf hier zou niet meer nodig zijn, dat zou weg kunnen

                    // Get <template> element
               //     var itm = document.getElementById("tpl-hero");
// Copy the <template element and its child nodes
               //     var cln = itm.content.cloneNode(true);

                    // console.log(heroes);  // display all heroes also the one added in the console
                 //   cln.querySelector(".name").innerHTML = item.name;
                  //  cln.querySelector(".alter-ego").innerHTML = item.alterEgo;
                  //  cln.querySelector(".powers").innerHTML = item.abilities;

                    // Append the cloned <template> element to <ol> with id="target"
               //     document.getElementById("target").appendChild(cln);
                }
            })
    });
})();