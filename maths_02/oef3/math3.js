(function() {


document.getElementById("run").addEventListener("click", function(){


    function rekenen() {
        for(x=1; x <= 21; x++){

            var node = document.createElement("li");

            var textnode = document.createTextNode(Math.pow(x,2));
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);

        }
    }
    rekenen();
});

})();

