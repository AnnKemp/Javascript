/*Inside the element with id "target", create an HTML table with 10 columns and 10 rows, containing the
tables of multiplication from 1 to 10.</p>
</section>
<section class="material">
    <div id="target"></div>
    </section> */


(function() {

    var tabel = document.createElement("TABLE");
    tabel.setAttribute("width", "500");
    tabel.setAttribute("border", "1");

        for(y=1;y<=10;y++) {
            var rowOne = document.createElement("ROW");


            for (i = 1; i <= 10; i++) {

                var node = document.createElement("TD");                 // Create a <td> node
                var textnode = document.createTextNode(i+"x"+y);         // Create a text node
                node.setAttribute("width", "50");
                node.appendChild(textnode);         // Append the text to <td>
                rowOne.appendChild(node);  // Append td to tr
            }
            tabel.appendChild(rowOne);
        }
        document.getElementById("target").appendChild(tabel);     // Append <table> to <div> with id="target
})();