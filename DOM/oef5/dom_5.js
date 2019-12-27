/* When hovering over the image, change its source attribute to the value specified in the "data-hover"
attribute.
   <section class="material">
            <figure>
                <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />
            </figure>
        </section>

        */
(function() {

 var x=document.getElementsByTagName("img")[0];
    x.setAttribute("height", "300");
    x.setAttribute("width", "300");
    x.setAttribute("border", "5");

    x.addEventListener("mouseover", function() {
        //alert("je hebt gehovert!");  (just testing if the mouseover works)

        var imgName=x.getAttributeNode("data-hover").value;

// pity you can't see the images so you can't test if everything works perfectly.
      x.setAttribute("src", imgName);
    });
})();