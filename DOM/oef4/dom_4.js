(function() {

 var x = document.getElementsByTagName("span")[0].getAttributeNode("data-image").value;

    var beeld = document.createElement("img");
    var attribuut = document.createAttribute("src");
    beeld.appendChild(attribuut);

    var element = document.getElementById("target");
    element.appendChild(beeld);
    document.setAttribute("src").value=x;

})();