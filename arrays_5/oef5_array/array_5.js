(function() {
    document.getElementById("run").addEventListener("click", function() {
// een array met objecten in met alleen eigenschappen in en geen functies
   // , display on the console, one after the other,
   //     the name of each person in the array <strong>people</strong>. Use the <em>forEach method</em>.</p>
    var people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
        people.forEach(myFunction);

        function myFunction(item, index) {
            console.log(item);
        }

    });
})();
