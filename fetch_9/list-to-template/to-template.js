(() => {
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

                   cln.querySelector(".name").innerHTML = item.name;
                   cln.querySelector(".alter-ego").innerHTML = item.alterEgo;
                   cln.querySelector(".powers").innerHTML = item.abilities;

                   // Append the cloned <template> element to <ol> with id="target"
                    document.getElementById("target").appendChild(cln);
                }
        })
    });
})();




