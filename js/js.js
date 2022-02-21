//button clicker//
var clicks = 0; // change int to var here
    function countClicks() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };