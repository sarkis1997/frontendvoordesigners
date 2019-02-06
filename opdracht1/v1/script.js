/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
document.getElementById("button").addEventListener("click", function( event ) {
    // Laat het huidige aantal kliks in het klikelement zien.
    event.target.textContent = "Aantal kliks: " + event.detail;
  }, false);