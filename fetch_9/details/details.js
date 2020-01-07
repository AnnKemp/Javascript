(() => {
document.getElementById("run").addEventListener("click", function(){

    let heroName=document.getElementById("hero-id").value;

    fetch("http://localhost:12345/list-to-console_1/api.json")
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            // de data er uit halen
            for(i=0;i<data.heroes.length;i++) {

               if(heroName==(data.heroes[i].name)){

                   var itm = document.getElementById("tpl-hero");
                    // Copy the <template element and its child nodes
                   var cln = itm.content.cloneNode(true);

                   cln.querySelector(".name").innerHTML = data.heroes[i].name;
                   cln.querySelector(".alter-ego").innerHTML = data.heroes[i].alterEgo;
                   cln.querySelector(".powers").innerHTML = data.heroes[i].abilities;

                   // Append the cloned <template> element to <ul> with id="target"
                   document.getElementById("target").appendChild(cln);
               }
            }
        })
});
})();