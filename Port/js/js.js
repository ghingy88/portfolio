//button clicker//
var clicks = 0; // change int to var here
    function countClicks() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

//COMMON NAV AND FOOTER//
    $(function(){
        $("#nav-placeholder").load("assets/php/nav.html");
      });

      $(function(){
        $("#footer-placeholder").load("assets/php/footer.html");
      });
//END COMMON NAV AND FOOTER//