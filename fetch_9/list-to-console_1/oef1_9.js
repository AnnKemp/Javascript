(() => {
/*Once the REST API of the exercise has been launched you can access it at the same domainname:port that your server resides on.
 This small API follows the REST precepts, and contains, under the /heroes path, data about X-Men.
 When you click on the button, use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch function</a>
 and following the REST architecture, retrieve the list of X-Men and display it in the console.</p>

    <p>The technique to fetch data from the server with JavaScript is commonly called <a href="https://www.w3schools.com/js/js_ajax_intro.asp">Ajax</a>.
     While there are different syntaxes to make the call, the general theory stays the same.</p>
    <p>The most modern approach without using a framework is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch function</a>,
     I recommend using it.</p>
    </section>*/

document.getElementById("run").addEventListener("click", function(){

    fetch("http://localhost:12345/list-to-console_1/api.json")
        //This is just an HTTP response, not the actual JSON
        .then((response) => {
            return response.json();
        })
 /*   To extract the JSON body content from the response,
        we use the json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.) */
        .then((myJson) => {
            console.log(myJson);
        });

    // het werkt ik snap er een beetje van . . .
});
})();