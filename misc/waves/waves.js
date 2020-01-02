(function() {
    window.addEventListener("load", function(){

        // Wrap every letter in a p   // waarschijnlijk is een span-element beter

        //The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
        // Note: The querySelector() method only returns the first element that matches the specified selectors.
        // To return all the matches, use the querySelectorAll() method instead.
        var textWrapper = document.querySelector('.m19 #target');

        // \S matches a character other than white space
        //https://developer.mozilla.org/nl/docs/Web/JavaScript/Guide/Reguliere_Expressies
        //    $&    means: lastMatch
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<p id=\"target\">$&</p>");

// dit is een object met eigenschappen:waarde-paren in
        anime.timeline({loop: true})
            .add({
                targets: '.m19 #target',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)  // this is a method
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