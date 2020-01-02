(function() {
    window.addEventListener("load", function(){

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.m19 #target');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<p id=\"target\">$&</p>");

        anime.timeline({loop: true})
            .add({
                targets: '.m19 #target',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
            targets: '.m19',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});
})();

// this great solution comes from:
//https://tobiasahlin.com/moving-letters/#9