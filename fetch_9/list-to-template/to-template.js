(() => {
/*  <p>When you click on the button, use the fetch function, retrieve the list of X-Men and display it in the tag whose id is "target".
   Use the template tag to reproduce an html structure for each hero.</p>
   The template tag already exists in the HTML structure, be sure to check the HTML code!
        <template id="tpl-hero">
                <li class="hero">
                    <h4 class="title">
                        <strong class="name"></strong>
                        <em class="alter-ego"></em>
                    </h4>
                    <p class="powers"></p>
                </li>
            </template>
            <ol id="target"></ol>
   */
    document.getElementById("run").addEventListener("click", function(){

        fetch("http://localhost:12345/list-to-console_1/api.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // de data er uit halen
            data.heroes.forEach(thisFunction);

                function thisFunction(item, index) {
                    // console.log(item, index);
                    // Get <template> element
                    var itm = document.getElementById("tpl-hero");
// Copy the <template element and its child nodes
                    var cln = itm.content.cloneNode(true);
// Append the cloned <template> element to <ol> with id="target"
                    document.getElementById("target").appendChild(cln);
                     alert(item.name+item.alterEgo+item.abilities); // dus met een alert geeft ie ze wél alle vijf dus de foreach werkt wél goed, dan worden wél de gegevens vertoont
// nu nog de data toewijzen
// dus hij maakt de vijf items aan, de vijf ol's, hij vult echter alleen de eerste en dan met de vijfde gegevens-set dus hij schiet door
                    // hij maakt in de vijf ol's dus ook de html-structuur aan, dus alleen het opvullen is het probleem.

                    document.querySelector(".name").innerHTML = item.name;
                    document.querySelector(".alter-ego").innerHTML = item.alterEgo;
                    document.querySelector(".powers").innerHTML = item.abilities;

                }
        });

    });
})();




