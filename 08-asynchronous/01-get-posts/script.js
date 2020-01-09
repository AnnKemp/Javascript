/* de bovenvernoemde functie in de utils file
}
    ((ns, utils) => {
        ns.wait = delay => new Promise(resolve => setTimeout(resolve, delay));

        ns.getPosts = () =>
            ns
                .wait(1000)
                .then(() =>
                    Promise.resolve(
                        Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                            id => ({id, ...utils.generatePost()}),
                        ),
                    ),
                );
} */
 (() => {
     document.getElementById("run").addEventListener("click", () => {

         window.lib.getPosts(function (error, data) {
             console.log(data);
         });
    });
})();



