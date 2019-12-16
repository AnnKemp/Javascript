(function() {

    var res;

   while(res !== true) {
        var age = prompt("How old are you?");
        var gender = prompt("Which gender are you?");
        var town = prompt("In which town do you live?");
        res = confirm("You are " + age + " old and a " + gender + " you live in. " + town + "\n Is this right?");
    }
})();
