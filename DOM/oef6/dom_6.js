// I have changed the images to test the caroussel because the links were relative to... and not working

(function() {
    var x=document.getElementsByTagName("img")[0];
    x.setAttribute("height", "300");
    x.setAttribute("width", "300");
    x.setAttribute("border", "5");
   // var imgSource=x.getAttributeNode("src").value;

    var gallery= [ // I have changed the images to test the caroussel because the links were relative to... and not working
        "images/bell.webp",
        "images/compass.webp",
        "images/map.webp",
        "images/lemon.webp",
        "images/clock.webp",
    ];
    var i=0;

    document.getElementById("next").addEventListener("click", function(){
        i=i+1;

       if(i>=gallery.length){
         i=0;
        }
        x.setAttribute("src", gallery[i]);
    });
})();