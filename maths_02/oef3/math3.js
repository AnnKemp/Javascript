document.getElementById("run").addEventListener("click", function(){


function rekenen() {
    for(x=1; x <= 21; x++){

        var node = document.createElement("li");

        var textnode = document.createTextNode(Math.sqrt(x));
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

    }
}
    rekenen();
});

var node = document.createElement("LI");
var inhoud=Math.sqrt(x);
var textnode = document.createTextNode("inhoud");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);