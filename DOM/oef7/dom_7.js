//Inside the element with id "target", create an HTML table with 1 column and 10 rows.
//<section class="material">
//    <div id="target"><table><tr><td>item_1</td></tr></table></div>
 //   </section>

(function() {

    var tabel = document.createElement("TABLE");
    tabel.setAttribute("width", "50");
    tabel.setAttribute("border", "1");

    for(i=0;i<10;i++) {
    var rowOne=document.createElement("ROW");
    tabel.appendChild(rowOne);

        var node = document.createElement("TD");                 // Create a <td> node
        var textnode = document.createTextNode("item_"+i);         // Create a text node
        node.appendChild(textnode);         // Append the text to <td>
        rowOne.appendChild(node);  // Append td to tr
    }

    document.getElementById("target").appendChild(tabel);     // Append <table> to <div> with id="target

})();