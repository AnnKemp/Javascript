(function() {
   /* . Create a new image
                element inside the target element that displays the image referred to by the attribute value. Then remove
                the original element.
           <section class="material">
            <span id="source" data-image="http://www.randomkittengenerator.com/cats/rotator.php"></span>
            <figure id="target"></figure>
        </section>
        */

var x = document.getElementById("source");
var waarde=x.getAttributeNode("data-image").value;
// tot hiertoe werkt het

var beeld = document.createElement("IMG");
beeld.setAttribute("src", waarde);
beeld.setAttribute("height", "300");
beeld.setAttribute("width", "300");
beeld.setAttribute("border", "5");
beeld.setAttribute("alt", "kitten");

var element = document.getElementById("target");
element.appendChild(beeld);

// het element verwijderen zonder de parent bij naam te kennen of te selecteren
var item = document.getElementById("source");
item.parentNode.removeChild(item);

})();
