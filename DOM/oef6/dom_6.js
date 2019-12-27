/*<section class="explain">
    <p>When you click the button, change the source of the image to the next one listed in the
<strong>gallery</strong> array.</p>
</section>
<section class="material">
    <figure>
    <img src="https://www.shutterstock.com/nl/image-vector/golden-metal-bell-red-bow-isolated-1237905265" alt="Carousel" />
    </figure>
    <div class="actions">
    <button type="button" id="next">Next image</button>
</div>
</section>*/

(function() {
    var x=document.getElementsByTagName("img")[0];
    x.setAttribute("height", "300");
    x.setAttribute("width", "300");
    x.setAttribute("border", "5");
   // var imgSource=x.getAttributeNode("src").value;

    var gallery= [
        // en deze beelden doen het ook niet, ik moet deze even downloaden om te testen of het effectief werkt
        "https://www.shutterstock.com/nl/image-vector/golden-metal-bell-red-bow-isolated-1237905265",
        "https://www.shutterstock.com/nl/image-photo/black-clock-hanging-wall-546975487",
        "https://www.shutterstock.com/nl/image-photo/vintage-compass-isolated-on-white-background-613586348",
        "https://www.shutterstock.com/nl/image-vector/colored-world-map-borders-countries-roads-702945136",
        "https://www.shutterstock.com/nl/image-photo/lemon-fruit-leaf-isolated-on-white-1028905405",
    ];

    document.getElementById("next").addEventListener("click", function(){

        /* var gallery= [  // I have put the original code in comment because the links doesn't work and that's not practical to test the code
             "../../_shared/img/bell.svg",
             "../../_shared/img/clock.svg",
             "../../_shared/img/compass.svg",
             "../../_shared/img/lemon.svg",
             "../../_shared/img/map.svg",
         ]; */
        var i=0;
gallery[i]=i+1;
        x.setAttribute("src", gallery[i]);

    });

})();