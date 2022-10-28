
// When a user clicks on a button, all <p> elements will be hidden :

$(document).ready(function() {
    $("button").click(function() {
        $("p").hide();
    })
})